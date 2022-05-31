export function getHouseForm(house = {}){
  return `
  
  <form class="mb-3 col-12 bg-white p-3 mt-4" onsubmit="app.housesController.${house.id ? `updateHouse('${house.id}')` : 'createHouse()'}">
                  <h3> ${house.id ? `Edit ` + house.description : 'list a house'} </h3>
                    <div class="row">
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Name</label>
                        <input required type="text" name="name" id="name" value="${house.description || ''}" placeholder="Enter Home Name" maxlength="15"
                          minlength="3" class="form-control" placeholder="" aria-describedby="helpId"
                          title="please enter SqrFootage">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">SqrFootage</label>
                        <input required type="number" name="sqrfootage" id="sqrfootage" value="${house.levels || 0}" placeholder="Enter Sqr Footage"
                          class="form-control" placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Room Number</label>
                        <input required type="number" name="roomnumber" id="roomnumber" value="${house.roomnumber || 0}" min="" max="300"
                          class="form-control" placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Price</label>
                          <input required type="number" name="price" id="price" value="${house.price || 1}" min="1" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Levels</label>
                          <input required type="number" name="levels" id="levels" value="${house.levels || 1}" min="1" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-3 mb-2">
                        <label for="" class="form-label">Year</label>
                          <input required type="number" name="year" id="year" value="${house.year || 1}" min="1" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-6 mb-2">
                        <label for="" class="form-label">Bedrooms</label>
                        <input required type="number" name="bedrooms" id="bedrooms" value="${house.bedrooms || 0}" min="0" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-6 mb-2">
                        <label for="" class="form-label">Bathrooms</label>
                        <input required type="number" name="bathrooms" id="bathrooms" value="${house.bathrooms ||0}" min="0" class="form-control"
                          placeholder="" aria-describedby="helpId">
                      </div>
                      <div class="col-12">
                        <label for="" class="form-label">Image Url</label>
                        <input required type="text" name="image" id="image" value="${house.image || ''}" class="form-control" placeholder=""
                          aria-describedby="helpId">
                      </div>
                    </div>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    ${getButtons(house.id)}
                  </form>
  
  `
} 

function getButtons(id){
  if(id){
    return `
    <button type="submit" class="btn btn-info px-3 py-2" title="edit house listing"><i
    class="mdi mdi-pencil"></i>
  Save</button>
    `
  }
  else{
    return ` 
    <button type="submit" class="btn btn-success px-3 py-2" title="list a house"><i
    class="mdi mdi-plus"></i>
  Create</button>
    `
  }
}