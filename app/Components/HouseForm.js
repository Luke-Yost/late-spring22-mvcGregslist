export function getHouseForm(){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.createHouse()">
                  <h3> List a Home </h3>
                    <div class="row">
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Name</label>
                        <input required type="text" name="name" id="name" placeholder="Enter Home Name" maxlength="15"
                          minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                          title="please enter SqrFootage">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">SqrFootage</label>
                        <input required type="number" name="sqrfootage" id="sqrfootage" placeholder="Enter Sqr Footage"
                          class="form-control" placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Room Number</label>
                        <input required type="number" name="roomnumber" id="roomnumber" value="" min="" max="300"
                          class="form-control" placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Price</label>
                        <input required type="number" name="price" id="price" value="1" min="1" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-6 mb-2">
                        <label for="" class="form-label">Bedrooms</label>
                        <input required type="number" name="bedrooms" id="bedrooms" value="0" min="0" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-6 mb-2">
                        <label for="" class="form-label">Bathrooms</label>
                        <input required type="number" name="bathrooms" id="bathrooms" value="0" min="0" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-12">
                        <label for="" class="form-label">Image Url</label>
                        <input required type="text" name="image" id="image" class="form-control" placeholder=""
                          aria-describedby="helpId">
                      </div>
                    </div>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary px-3 py-2" title="List House"><i
                        class="mdi mdi-plus"></i>
                      Create</button>
                  </form>
  
  `
}