# 第一个阶段: 拉取node镜像来打包React项目
FROM node:14-alpine
WORKDIR /app
COPY . ./
RUN npm install
EXPOSE 80
CMD ["node","app.js"]


