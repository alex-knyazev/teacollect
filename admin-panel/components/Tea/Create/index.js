import { VueEditor } from 'vue2-editor';

import FileInput from '~/components/common/FileInput/index.vue';

export default {
  name: 'TeaCreate',

  components: {
    VueEditor,
    FileInput,
  },

  props: {
    newTea: {
      type: Object,
      required: true,
    },
    teaTypes: {
      type: Array,
      required: true,
    },
    languages: {
      type: Array,
      required: true,
    },
    brewingTimes: {
      type: Array,
      required: true,
    },
    temperatureDegrees: {
      type: Array,
      required: true,
    },
  },

  methods: {
    addTranslatedNames() {
      this.newTea.translatedNames.push({ name: '', russian: '' });
    },
    removeTranslatedName() {
      this.newTea.translatedNames.pop();
    },

    addBirthplaceTranslatedName() {
      this.newTea.birthplace.translatedNames.push({ name: '', russian: '' });
    },

    removeBirthplaceTranslatedName() {
      this.newTea.birthplace.translatedNames.pop();
    },

    handleFileChange(file) {
      this.newTea.image = file;
    },

    handleSaveClick() {
      this.$emit('save');
    },
  },
};
