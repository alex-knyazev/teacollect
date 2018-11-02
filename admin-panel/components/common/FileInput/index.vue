<template>
  <div>
    <v-text-field 
      ref="fileTextField"
      v-model="filename"
      :required="required"
      :disabled="disabled"
      label="choose file"
      prepend-icon="attach_file"
      single-line
      @click.native="onFocus"
    />
    <input 
      ref="fileInput"
      :accept="accept"
      :multiple="false"
      :disabled="disabled"
      type="file"
      @change="onFileChange"
    >
  </div>
</template>


<script src="./index.js"></script>
<style scoped src="./index.css"></style>
