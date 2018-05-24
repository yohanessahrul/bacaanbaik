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
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Judul">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Penerbit</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Penerbit">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Penulis</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Penulis">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Upload Cover</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                        <td>
                            <div class="image">
                                <img style="max-height: 50px;" src="https://files.readanybook.com/786336/thumbs/152x264/a-higher-loyalty-truth-lies-and-leadership.jpg" alt="">
                            </div>
                        </td>
                        <td>Beranak dalam kaleng</td>
                        <td>Tokopedia</td>
                        <td>@tahilalats</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>tahilalats</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>tahilalats</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      books: ''
    }
  },
  created () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
