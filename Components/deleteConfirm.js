export default function Page() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#example"
      >
        Delete Confirm
      </button>

      <div
        class="modal fade"
        id="example"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mt-5 py-5 ">
          <div class="bg-white p-3 rounded-4">
            <div class=" flex-column ms-2 ">
              <h5 class="modal-title text-wrap fw-bold ">
                Are you sure you want to remove this project?
              </h5>
            </div>

            <div class="text-end ">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Remove
              </button>
              <button type="button" class="btn border-primary ms-2 ">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
