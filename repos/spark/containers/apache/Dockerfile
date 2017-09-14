FROM httpd:2.4
COPY conf/httpd.conf /usr/local/apache2/conf/httpd.conf
RUN ["echo","deb https://dl.bintray.com/sbt/debian /","|","sudo","tee","-a","/etc/apt/sources.list.d/sbt.list"]
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
#RUN ["apt-get","install","apt-transport-https"]
RUN apt-get update
RUN ["apt-get","-y","install","wget","git"]
RUN ["wget","https://d3kbcqa49mib13.cloudfront.net/spark-2.2.0-bin-hadoop2.7.tgz"]
RUN tar zxvf spark-2.2.0-bin-hadoop2.7.tgz -C /usr/local/lib/
RUN ln -s /usr/local/lib/spark-2.2.0-bin-hadoop2.7 /usr/local/lib/spark
RUN git clone git://github.com/apache/spark.git -b branch-2.2
RUN apt-get -y install scala        