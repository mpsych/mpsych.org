# mpsych.org

```
sudo apt-get update
### Install dependencies
sudo apt install build-essential checkinstall zlib1g-dev
**Download OpenSSL 1.1.1:**
cd ~/Downloads
wget https://www.openssl.org/source/openssl-1.1.1n.tar.gz
tar xf openssl-1.1.1n.tar.gz
**Compile it:**
cd ~/Downloads/openssl-1.1.1n
./config --prefix=/opt/openssl-1.1.1n --openssldir=/opt/openssl-1.1.1n shared zlib
make
make test
sudo make install
**Link the system's certs to OpenSSL 1.1.1 directory:**
sudo rm -rf /opt/openssl-1.1.1n/certs
sudo ln -s /etc/ssl/certs /opt/openssl-1.1.1n
**Use RUBY_CONFIGURE_OPTS=--with-openssl-dir=/opt/openssl-1.1.1n before the command to install the ruby version:**
**Install ruby >=2.7.0 <3.0**
sudo apt install git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

rbenv install 2.7.0
*If encounters BUILD FAILED (Ubuntu XX.XX using ruby-build 20XXXXXX)
Inspect or clean up the working tree at /tmp/ruby-build.20230811133135.51079.cWtNKI*
RUBY_CONFIGURE_OPTS=--with-openssl-dir=/opt/openssl-1.1.1n rbenv install 2.7.0

**Set ruby version**
rbenv global 2.7.0
rbenv local 2.7.0

**Check ruby version (should show you "ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-linux]")**
ruby -v

**Do not run this (replaced by the above commands)**
~~sudo apt-get install ruby-bundler ruby-dev~~

gem install github-pages -v '198' --source 'https://rubygems.org/'

bundle install

bundle exec jekyll serve

*reference: https://askubuntu.com/questions/1399788/ruby-installation-build-failed-ubuntu-20-04-using-ruby-build-20220324, https://www.fosslinux.com/107486/the-guide-to-installing-and-using-ruby-on-ubuntu.htm*
```