import sys
import os
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
import numpy
import tensorflow as tf

log_dir = "/tmp/tensorboard"
if tf.gfile.Exists(log_dir):
    tf.gfile.DeleteRecursively(log_dir)
tf.gfile.MakeDirs(log_dir)

print("start")
def read_images(file):
    fname_queue = tf.train.string_input_producer([file])
    reader = tf.TextLineReader()
    key, val = reader.read(fname_queue)
    fname, label = tf.decode_csv(val, [["aa"], [1]])
    return read_image(fname)
def read_image(file):
    folder = "/notebooks/data/"
    image_r = tf.read_file(folder + file)
    return tf.image.decode_image(image_r, channels=3)
def main():
    image = read_images("/notebooks/data/label.csv")
    image_s = tf.shape(image)
    sess = tf.Session()
    init = tf.initialize_all_variables()
    sess.run(init)
    tf.train.start_queue_runners(sess)
    _ = tf.summary.image('local', tf.reshape(image, [-1, image_s[0], image_s[1], image_s[2]]), 1)
    merged = tf.summary.merge_all()
    summary = sess.run(merged)

    global log_dir
    summary_write = tf.summary.FileWriter(log_dir,sess.graph)
    summary_write.add_summary(summary)
    summary_write.close()

if __name__=='__main__':
    main()
print("end")