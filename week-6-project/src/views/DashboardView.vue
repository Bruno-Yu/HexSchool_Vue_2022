<template>
  <div class="container mt-3">
    <h1 class="text-center mt-5 fs-1 mb-3 fw-bolder">管理員頁面</h1>
    <p class="text-center fs-3 lh-sm text-secondary fw-bolder text-nowrap">
      身為真美國餐廳授權階級，您擁有操縱與編輯產品的權力:)
    </p>
    <nav class="d-flex justify-content-center">
      <router-link
        class="link-dark fw-bold text-decoration-none me-2 active"
        to="/admin"
      >
        產品管理列表
      </router-link>
      |
      <router-link
        class="link-dark text-decoration-none fw-bold mx-2"
        to="/orderAmin"
      >
        訂單管理列表
      </router-link>
      |
      <router-link
        class="link-dark text-decoration-none fw-bold ms-2"
        to="/couponsAdmin"
      >
        優惠券管理列表
      </router-link>
      |
      <router-link
        class="link-dark text-decoration-none fw-bold ms-2"
        to="/aboutAdmin"
      >
        關於我們編輯
      </router-link>
      |
      <router-link
        class="link-dark text-decoration-none fw-bold ms-2"
        to="/eventAdmin"
      >
        活動頁面編輯
      </router-link>
    </nav>
    <hr class="text-secondary" />
    <router-view />
  </div>
</template>
