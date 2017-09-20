FROM java:8
RUN apt-get update
RUN ["apt-get","install","-y","sudo"]
RUN ["apt-get","install","-y","apt-transport-https"]
RUN ["apt-get","install","-y","vim"]
RUN ["apt-get","install","-y","wget","git"]
RUN ["wget","https://d3kbcqa49mib13.cloudfront.net/spark-2.2.0-bin-hadoop2.7.tgz"]
RUN tar zxvf spark-2.2.0-bin-hadoop2.7.tgz -C /usr/local/lib/
RUN ln -s /usr/local/lib/spark-2.2.0-bin-hadoop2.7 /usr/local/lib/spark
RUN ["apt-get","install","-y","scala"]
RUN ["apt-get","update"]
RUN touch ~/.bash_profile
RUN echo "\n" >  ~/.bash_profile 
ENV JAVA_HOME /usr/lib/jvm/java-1.8.0-openjdk-amd64
ENV PATH $JAVA_HOME:$PATH
ENV SPARK_HOME /usr/local/lib/spark
ENV PATH $PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin
RUN cd /usr/local/lib/spark && sudo ./sbin/start-master.sh
RUN ln -s /usr/local/lib/spark spark
