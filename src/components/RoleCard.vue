<template>
    <a-card hoverable :style="{ width: '360px' }">
      <template #cover>
        <div
          :style="{
            height: '204px',
            overflow: 'hidden',
          }"
        >
          <img
            :style="{ width: '100%', transform: 'translateY(-20px)' }"
            alt="dessert"
            src="../resourses/director_card.jpg"
          />
        </div>
      </template>
      <a-card-meta title="Card Title">
        <template #description>
          Card content <br />
          Card content
        </template>
      </a-card-meta>
    </a-card>
  </template>
  