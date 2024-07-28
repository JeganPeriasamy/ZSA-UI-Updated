import Image from "next/image";
import MoreUploadImage from "../public/img/undraw_chasing_love_re_9r1c 1.png";
export default function Page() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#moreupload"
      >
        More Upload
      </button>

      <div
        class="modal fade"
        id="moreupload"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mt-5 py-5 ">
          <div class="bg-white p-3 rounded-4">
            <div class=" flex-column ms-2 text-center ">
              <Image src={MoreUploadImage}></Image>
              <h5 class="modal-title text-wrap fw-bold mt-3">
                Thanks! for uploading your project. Do you want upload more?
              </h5>
            </div>

            <div class="row mt-3">
              <button
                type="button"
                class="btn bt-sm col border"
                data-bs-dismiss="modal"
              >
                No,I'll do Later
              </button>
              <button type="button" class="btn btn-primary me-2 ms-2 w-25 col">
                YES,I'M
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
