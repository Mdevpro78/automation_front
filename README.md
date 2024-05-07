---
runme:
  id: 01HX9Y0E0T9EH4W6FQHXQJAP6N
  version: v3
---

<style>
    * {
        direction: rtl;
        align: justify;
    }
</style>
<h3 align="center">automation front</h3>

---

<p align="center" dir="auto" align="right"> 
    این پروژه شامل صفحات ورود، ثبت نام، حساب کاربری می‌باشد همچنین شامل تست‌های end to end با استفاده از ابزار cypress نیز برای هریک از صفحات مذکور است
    <br> 

</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 Project Info](#-project-info)
- [🏁 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)

##  🧐 Project Info

<div dir="auto" align="justify"> 
    این فایل شامل دستورات لازم برای اجرای پروژه و مشاهده نتایج تست ها بر بستر داکر همچنین توضیحات لازم برای فهم ساختار پروژه می‌باشد.
    <br> 
</div>

<h3 dir="auto" align="justify"> توضیحات ساختار پروژه </h3>
<div dir="auto" align="justify"> 

- docs: Gherkin شامل فایل سناریو‌ها با زبان.
- cypress/e2e:  شامل تست‌های صفحات لاگین، ثبت نام و حساب کاربری است.
- cypress/videos: شامل فایل تصویری از فرایند اجرای تست‌ها
- cypress.config.js: cypress فایل مربوط به کانفیک
- Dockerfile.web: web فایل ایمیج داکر مربوط به سرویس
- docker-compose.yaml: web, cypress فایل شامل سرویس‌های

</div>

## 🏁 Getting Started

<div dir="auto" align="justify"> 
این بخش شامل معرفی ابزار‌های مورد نیاز برای اجرای پروژه همچنین شامل گام های اجرای پروژه می‌باشد.
    <br> 
</div>

### Prerequisites

<div dir="auto" align="justify"> 
تنها ابزار مورد نیاز برای اجرای پروژه <a href="https://docs.docker.com/engine/install/">Docker و Docker Compose</a> می باشند.
    <br> 
</div>

### Installing

<div dir="auto" align="justify"> 
این بخش شامل دستورات لازم برای اجرای پروژه بر بستر داکر می‌باشد. 
</div>

<h5 dir="auto" align="justify">۱. دریافت پروژه از گیت‌هاب. </h5>

```sh {"id":"01HXA2QAG09ZX4C9SY0812ATD7"}
git clone -b main http://  && cd automation_front

```

<h5 dir="auto" align="justify">۲. اجرای پرژه </h5>

```sh {"id":"01HXA2QAG09ZX4C9SY0A7E2SJ3"}
windows user: docker compose -f docker-compose.yaml up -d 
linux user: sudo docker compose -f docker-compose.yaml up -d 
```

<h5 dir="auto" align="justify">۳. توقف پروژه </h5>

```sh {"id":"01HXA2QAG09ZX4C9SY0DR6A9XX"}
windows user: docker compose -f docker-compose.yaml down -v
linux user: sudo docker compose -f docker-compose.yaml down -v
```

<h5 dir="auto" align="justify">۴. مشاهده لاگ‌های cypress</h5>

```sh {"id":"01HXA2QAG09ZX4C9SY0FKA9V4B"}
windows user: docker compose -f docker-compose.yaml logs -f cypress
linux user: sudo docker compose -f docker-compose.yaml logs -f cypress
```
