CREATE USER blog_user WITH PASSWORD 'blog_user_pass';
CREATE DATABASE blogdb;
GRANT ALL PRIVILEGES ON DATABASE blogdb TO blog_user;
ALTER DATABASE blogdb OWNER TO blog_user;