<template>
  <div id="note-editor">
    <!-- <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea> -->
    <textarea id="editor">
      <p>{{activeNoteText}}</p>
    </textarea>

    <button class="btn btn-info text-center" @click='editNote(ed.$txt.text())'>保存</button>
  </div>
</template>

<script>
import { editNote } from '../vuex/actions'

export default {
  data() {
    return {
      ed: '',
    }
  },
  ready: function() {
      var _self = this;
      var div = document.getElementById('editor');
      this.ed = new wangEditor(div)
      this.ed.create();
      this.ed.$txt.text(this.activeNoteText)
  },
  vuex: {
    getters: {
      activeNoteText: state => state.activeNote.text ? state.activeNote.text : ''
    },
    actions: {
      editNote
    }
  },
  methods: {
    changeText: function() {
      this.ed.$txt.text(this.activeNoteText)
    }
  },
  watch: {
    'activeNoteText' : 'changeText'
  }
}
</script>
<style scoped>
    .wangEditor-menu-container {
       max-height: 58px !important; 
    }
    #editor {
      height: auto !important;
    }
    button {
      margin-left: 400px;
      margin-top: 20px;
      width: 76px;
    }
</style>
