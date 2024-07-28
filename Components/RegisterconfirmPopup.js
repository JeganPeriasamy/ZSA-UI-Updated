import Image from "next/image";
import RegisterImage from "../public/img/OBJECTS.png";
export default function Page() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#register"
        >
          Confirm
        </button>
  
        <div
          class="modal fade"
          id="register"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog mt-5 py-5 ">
            <div class="bg-white p-3 rounded-4">
              <div class=" flex-column ms-2 text-center ">
                <Image
                src={RegisterImage}
                                >

                </Image>
                <h5 class="modal-title text-wrap fw-bold mt-3">
                Thank you for registering! Hey there! Are you excited to showcase your projects?
                </h5>
              </div>
  
              <div class="row mt-3">
                <button
                  type="button"
                  class="btn bg_light_blue  w-50 col"
                  data-bs-dismiss="modal"
                >
                  BACK
                </button>
                <button type="button" class="btn btn-primary me-2 ms-2 w-50 col">
                  YES,I'M
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  