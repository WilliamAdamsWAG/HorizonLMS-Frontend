<template>
    <a-page-header
          :style="{ background: 'var(--color-bg-2)' }"
          title="HorizonLMS"
          subtitle="Новый горизонт знаний"
          :show-back="false"
        >
            <template #extra>
                <a-space>
                    <a-button type="primary" @click="handleClick">Зарегистрироваться</a-button>
                    <a-button type="outline">войти</a-button>
                </a-space>
            </template>
        </a-page-header>
  </template>
