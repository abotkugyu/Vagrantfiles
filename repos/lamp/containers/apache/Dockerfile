FROM httpd:2.4
COPY conf/httpd.conf /usr/local/apache2/conf/httpd.conf
RUN apt-get update && apt-get install -y \
    sudo \
    apt-transport-https \
    curl \
    perl \
    make \
    libdbd-mysql \
    libdbd-mysql-perl
RUN curl -L https://cpanmin.us | perl - -M https://cpan.metacpan.org -n Mojolicious
#RUN ["curl","-L","https://cpanmin.us","|","perl","-","-M","https://cpan.metacpan.org","-n","Mojolicious"]
