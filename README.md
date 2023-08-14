# mpsych.org


### Install dependencies
sudo apt-get update<br />
sudo apt install build-essential checkinstall zlib1g-dev<br />

**Download OpenSSL 1.1.1:**<br />
cd ~/Downloads<br />
wget https://www.openssl.org/source/openssl-1.1.1n.tar.gz<br />
tar xf openssl-1.1.1n.tar.gz<br />

**Compile it:**<br />
cd ~/Downloads/openssl-1.1.1n<br />
./config --prefix=/opt/openssl-1.1.1n --openssldir=/opt/openssl-1.1.1n shared zlib<br />
make<br />
make test<br />
sudo make install<br />

**Link the system's certs to OpenSSL 1.1.1 directory:**<br />
sudo rm -rf /opt/openssl-1.1.1n/certs<br />
sudo ln -s /etc/ssl/certs /opt/openssl-1.1.1n<br />

**Use RUBY_CONFIGURE_OPTS=--with-openssl-dir=/opt/openssl-1.1.1n before the command to install the ruby version >=2.7.0 <3.0:**<br />
sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev<br />

curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash<br />

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc<br />

echo 'eval "$(rbenv init -)"' >> ~/.bashrc<br />

source ~/.bashrc<br />

rbenv install 2.7.0<br />

***Only if you encounter "BUILD FAILED (Ubuntu XX.XX using ruby-build 20XXXXXX)
Inspect or clean up the working tree at /tmp/ruby-build.20230811133135.51079.cWtNKI", do the following***

RUBY_CONFIGURE_OPTS=--with-openssl-dir=/opt/openssl-1.1.1n rbenv install 2.7.0<br />

**Set ruby version**<br />
rbenv global 2.7.0<br />
rbenv local 2.7.0<br />

**Check if your ruby version is >=2.7 <3.0 (you should see "ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-linux]" if you run the below)**<br />
ruby -v<br />

**Do not run this (replaced by the above commands)**<br />
~~sudo apt-get install ruby-bundler ruby-dev~~<br />

gem install github-pages -v '198' --source 'https://rubygems.org/'<br />

bundle install<br />

**Run the server**<br />
bundle exec jekyll serve<br />

**Connect to localhost**
http://127.0.0.1:4000/<br />

***reference: https://askubuntu.com/questions/1399788/ruby-installation-build-failed-ubuntu-20-04-using-ruby-build-20220324, https://www.fosslinux.com/107486/the-guide-to-installing-and-using-ruby-on-ubuntu.htm***<br />
