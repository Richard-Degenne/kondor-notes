FROM ruby:3.1

RUN apt-get update -qq && apt-get install -y postgresql-client

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /usr/src/app
COPY Gemfile Gemfile.lock ./
RUN bundle install --production

COPY . .

EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "--binding", "0.0.0.0"]
