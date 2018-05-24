<template>
    <div class="admin-book">
        <div class="container">
            <h1>Admin Book</h1>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Add Book
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Judul</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Judul" v-model="judul">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Penerbit</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Penerbit" v-model="penerbit">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Penulis</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Penulis" v-model="penulis">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Upload Cover</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1" @change="takeFile">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="saveBook">Save changes</button>
                </div>
                </div>
            </div>
            </div>

            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cover</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Penerbit</th>
                    <th scope="col">Penulis</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, i) in books" :key="i">
                    <th scope="row"> {{ i + 1 }} </th>
                        <td>
                            <div class="image">
                                <img style="max-height: 50px;" :src="book.image" alt="">
                            </div>
                        </td>
                        <td> {{ book.judul }} </td>
                        <td> {{ book.penerbit }} </td>
                        <td> {{ book.penulis }} </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      judul: '',
      penerbit: '',
      penulis: '',
      file: null,
      formData: new FormData()
    }
  },
  computed: {
    ...mapState([
      'books'
    ])
  },
  created () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
    this.$store.dispatch('getAllBooks')
  },
  methods: {
    takeFile (event) {
      console.log('==> ', event)
      this.file = event.target.files[0]
    },
    saveBook () {
      this.formData.set('judul', this.judul)
      this.formData.set('penerbit', this.penerbit)
      this.formData.set('penulis', this.penulis)
      this.formData.set('avatar', this.file)

      axios({
        method: 'post',
        url: 'http://localhost:3000/books/savebook',
        headers: { token: localStorage.getItem('token') },
        data: this.formData
      })
        .then((response) => {
          console.log('response==>', response)

        })
        .catch((err) => {
          console.log('error =>', err)
        })
    }
  }
}
</script>

<style>

</style>
