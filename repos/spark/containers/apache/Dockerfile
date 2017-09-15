FROM java:8
RUN apt-get update
RUN ["apt-get","install","-y","sudo"]
RUN ["apt-get","install","-y","apt-transport-https"]
RUN ["apt-get","install","-y","vim"]
RUN ["apt-get","install","-y","wget","git"]
RUN ["wget","https://d3kbcqa49mib13.cloudfront.net/spark-2.2.0-bin-hadoop2.7.tgz"]
RUN tar zxvf spark-2.2.0-bin-hadoop2.7.tgz -C /usr/local/lib/
RUN ln -s /usr/local/lib/spark-2.2.0-bin-hadoop2.7 /usr/local/lib/spark
#RUN git clone git://github.com/apache/spark.git -b branch-2.2
RUN ["apt-get","install","-y","scala"]
#RUN echo deb https://dl.bintray.com/sbt/debian / | sudo tee -a /etc/apt/sources.list.d/sbt.list
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
RUN ["apt-get","update"]
#RUN ["apt-get","install","-y","sbt"]
##build/mvn -version
##java --version
##/usr/local/apache2/spark/pom.xml  (change java version 1.8)
##http://blog.kymmt.com/entry/maven_java_home
RUN sudo apt-get install -y default-jre
RUN sudo apt-get install -y default-jdk
RUN touch ~/.bash_profile
RUN echo "\n" >  ~/.bash_profile 
ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk-amd64
ENV PATH $JAVA_HOME:$PATH
ENV SPARK_HOME /usr/local/lib/spark
ENV PATH $PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin
#RUN cd /spark && ./dev/change-scala-version.sh 2.11
##sudo update-alternatives --config java
##sudo update-alternatives --config javac
#RUN cd /spark && build/mvn -DskipTests -e clean package
