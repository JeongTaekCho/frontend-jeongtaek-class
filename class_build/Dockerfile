# FROM ubuntu: 22.04

# RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash
# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

FROM node:14

COPY ./package.json /class_build/
COPY ./yarn.lock /class_build
WORKDIR /class_build
RUN yarn install 
# 소스코드 바뀔때마다 yarn install 재실행 방지.

# 도커는 캐시에 한줄씩 저장됨 그 값이 없으면 밑에 내용을 전부 재실행 !!!!

# RUN mkdir class_build => 아래에서 COPY 할 때, 자동으로 만들어 주므로 굳이 안써도 됨
COPY . /class_build/
WORKDIR /class_build/

RUN yarn build
# RUN yarn start

# RUN으로 실행시킨 부분은 이미지 저장 대상이다. CMD는 제외 됨.

CMD yarn start