# Tài liệu API - yelp-alike

## Bài tập sequelize

Viết các API theo các chức năng như sau với database db_food đã tạo ở bài tập buổi 5:

- Xử lý like nhà hàng (like, unlike, lấy danh sách like theo nhà hàng và user)
- Xử lý đánh giá nhà hàng (thêm đánh giá, lấy danh sách đánh theo nhà hàng và user)
- User đặt món (thêm order)
=> Lấy danh sách theo đối tượng thì GET API truyền vào mã id của đối tượng đó

---

## 1. Xử lý like nhà hàng

### 1.1. Like nhà hàng
- **URL:** `POST /likes`
- **Body:**
  ```json
  {
    "user_id": 1,
    "restaurant_id": 2
  }
  ```
- **Mô tả:** Người dùng like một nhà hàng.

### 1.2. Unlike nhà hàng
- **URL:** `DELETE /likes`
- **Body:**
  ```json
  {
    "user_id": 1,
    "restaurant_id": 2
  }
  ```
- **Mô tả:** Người dùng bỏ like một nhà hàng.

### 1.3. Lấy danh sách like theo nhà hàng
- **URL:** `GET /likes/restaurant/:restaurant_id`
- **Params:** `restaurant_id` (number)
- **Mô tả:** Lấy danh sách like của một nhà hàng.

### 1.4. Lấy danh sách like theo user
- **URL:** `GET /likes/user/:user_id`
- **Params:** `user_id` (number)
- **Mô tả:** Lấy danh sách like của một người dùng.

---

## 2. Xử lý đánh giá nhà hàng (Comments)

### 2.1. Thêm đánh giá
- **URL:** `POST /comments`
- **Body:**
  ```json
  {
    "user_id": 1,
    "restaurant_id": 2,
    "content": "Nhà hàng rất ngon!",
    "rating": 5
  }
  ```
- **Mô tả:** Người dùng thêm đánh giá cho nhà hàng.

### 2.2. Lấy danh sách đánh giá theo nhà hàng
- **URL:** `GET /comments/restaurant/:restaurant_id`
- **Params:** `restaurant_id` (number)
- **Mô tả:** Lấy danh sách đánh giá của một nhà hàng.

### 2.3. Lấy danh sách đánh giá theo user
- **URL:** `GET /comments/user/:user_id`
- **Params:** `user_id` (number)
- **Mô tả:** Lấy danh sách đánh giá của một người dùng.

---

## 3. Đặt món (Order)

### 3.1. Thêm order
- **URL:** `POST /orders`
- **Body:**
  ```json
  {
    "user_id": 1,
    "food_id": 2,
    "quantity": 3,
    "price": 40000
  }
  ```
- **Mô tả:** Người dùng đặt món ăn.

### 3.2. Lấy danh sách order theo user
- **URL:** `GET /orders?userId=1`
- **Query:** `userId` (number)
- **Mô tả:** Lấy danh sách order của một người dùng.

### 3.3. Lấy chi tiết order theo id
- **URL:** `GET /orders/:id`
- **Params:** `id` (number)
- **Mô tả:** Lấy chi tiết một order.

---

## 4. Order món ăn (Food)

### 4.1. Tạo món mới
- **URL:** `POST /food`
- **Body:**
  ```json
  {
    "name": "Bánh mì thịt",
    "price": 25000,
    "image": "banhmi_thit.jpg",
    "description": "Bánh mì Việt Nam với thịt nguội và rau thơm.",
    "restaurantId": 4,
    "isAvailable": true
  }
  ```
- **Mô tả:** Tạo món ăn mới.

### 4.2. Lấy danh sách món ăn
- **URL:** `GET /food`
- **Mô tả:** Lấy tất cả món ăn.

### 4.3. Lấy thông tin một món ăn
- **URL:** `GET /food/:id`
- **Params:** `id` (number)
- **Mô tả:** Lấy thông tin chi tiết một món ăn.

---