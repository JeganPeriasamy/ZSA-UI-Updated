export default function Page() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Project
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mt-5 py-5 ">
          <div class="bg-white p-3 rounded-4">
            <div class=" flex-column ms-2 ">
              <h5 class="modal-title text-nowrap fw-bold ">Are you sure?</h5>
              <p className="text-muted text-wrap text-start">
                Your unsaved changes will be lost. Save changes before closing
              </p>
            </div>

            <div class="text-end ">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>
              <button type="button" class="btn border-primary ms-2 ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
