<!-- eslint-disable prettier/prettier -->
<template>
  <h1>Chẳng ra gì cả bruh bruh</h1>
  <div>
    <div class="content-section introduction">
      <div class="feature-intro">
        <h1>Card</h1>
        <p>Card is a flexible container component.</p>
      </div>
      <AppDemoActions />
    </div>

    <div class="content-section implementation">
      <Card style="width: 25rem; margin-bottom: 2em">
        <template #title> Simple Card </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
      </Card>

      <Card style="width: 25em">
        <template #header>
          <img alt="user header" src="demo/images/usercard.png" />
        </template>
        <template #title> Advanced Card </template>
        <template #subtitle> Card subtitle </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save" />
          <Button
            icon="pi pi-times"
            label="Cancel"
            class="p-button-secondary"
            style="margin-left: 0.5em"
          />
        </template>
      </Card>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card'

export default defineComponent({
  name: 'HomeView',
  components: {
    Card,
  },
})
</script>
