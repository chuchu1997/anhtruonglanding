# Bước 1: Dùng Node.js 18 image làm base image
FROM node:18-alpine

# Bước 2: Đặt thư mục làm việc trong container
WORKDIR /app

# Bước 3: Copy package.json và package-lock.json (nếu có) vào container
COPY package.json package-lock.json ./

# Bước 4: Cài đặt các dependencies
RUN npm install --production

# Bước 5: Copy toàn bộ mã nguồn vào container
COPY . .

# Bước 6: Build ứng dụng Next.js
RUN npm run build

# Bước 7: Expose port để chạy ứng dụng
EXPOSE 3500

# Bước 8: Chạy ứng dụng
CMD ["npm", "start"]