import AddProject from "../public/img/OBJECTS.png";
import Image from "next/image";
import Add from "../public/img/Frame 22083.png"
import ProjectImage1 from "../public/img/Group 22668.png"
import ProjectCVideo1 from "../public/img/Group 22666.png"
import ProjectImage2 from "../public/img/Rectangle 2470.png"
import ProjectCVideo2 from "../public/img/Rectangle 2468.png"
import ProjectMedia from "../public/img/undraw_searching_re_3ra9 1.png";
export default function Page() {
  return (
    <div>
      <div className="container p-3 ">
        <div className="position-relative d-none d-lg-block ">
          <img
            height={200}
            src="https://s3-alpha-sig.figma.com/img/139b/fdc9/0438bd5bfa445d041a62568ccc48003b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JZRZugzudWQpqJ~Jen0w1ZKk-OhtpW2VNEv2BtNetEtXGN409KjGuH1aYsVmeQqRfSZMmrmcQ1fAP8Pw1pf1m1rJkncIeu4BAo1iurg79KhsRNEiBbiPXdwU1e3N2jKONPimMq9DvM~qgpjvk--qiGhs85rCrF0TQqq22BC2ySQUCVJKseI7-XIr5wIJknndVlyhb7QqHIKJRA38hzcYRBQqLohCpY5hgYIRWInbwmQY62WbTqskWd8C0sYbijoTyb2-zlXHulYBuR2za4XoUQltLhMZdp1oFfCUNZSxJetLbOSyEF6wHwWxw2hpTtakjEMKITLqvgEHEI92BKocNA__"
            class="object-fit-cover border rounded-4 col-12"
            alt="Responsive image"
          />
          <div className="position-absolute me-3 top-0 end-0 ">
            <i class="fa-solid fa-trash p-2 mt-2 bg-white text-danger"></i>
          </div>
        </div>

        <div className="position-absolute col-xl-3 col-lg-2 top-0 mt-5 py-5  start-10 d-none  d-lg-block">
          <div class="card ms-5 border-0 w-lg-50 ">
            <div class="card bg-dark text-white border-0  ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCZUMtWp5tgu49uFT1ApHCNhmueyopQsrxgvoZI3fy4AmXnjSDXC9cN7WE7Zv3ZlImxc&usqp=CAU
"
                class="card-img "
                alt="..."
              />
              <div class="card-img-overlay text-center mt-3 ">
                <img
                  src="https://s3-alpha-sig.figma.com/img/5b6b/fbe7/1ad5ca817f031682ae8854f7d2e78c40?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2EKhXZeX5FJfQaK3feyUtOwaCFAMct7U-UcEe54zESV79r-AlCoAUSQIlQM2urDgU0w6BcboCcrTuHo9-Gfvt1BTGX1L1a8z4l1tZchsVpbjmS9pkoYhgZSB8SYndKveJH0Y-u6Hk2PBcgCPBDFYQ-Cfs0NEa6kHcGDpYhvuQcg5rIoQlSzeF0b7m8WcX~gFqZo2lBQOuF~WxPH1Mk~Ph7~BV6wA8P8cl~5ACFQ9xXx7tQJgHZDCF832oVJzk-GcK0gt6D-Ion33~fcGnJw4Rtrh5ZJc5bq5hGndpgm8gybbgemBrZXBEI7FtFXp7Cx1RuIPlzxBtJVQrEvOcQn1w__
"
                  class="card-img w-25 "
                  alt="..."
                />
                <p class="card-text mt-1 mb-0">Constance Schaden</p>
                <p class="card-text text-dark mb-0">+91 789456123</p>
                <button
                  type="button "
                  class="btn btn-sm bg-light text-primary "
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div class="card-body ">
              <p class="card-title text-primary">
                <i class="fa-solid fa-book me-2"></i>My Projects
              </p>
              <p class="card-text">
                {" "}
                <i class="fa-solid fa-phone-volume me-2"></i>Request Callbacks
              </p>
              <p class="card-text">
                <i class="fa-solid fa-clock me-2"></i>Recent Activites
              </p>
              <p class="card-text">
                <i class="fa-solid fa-heart me-2"></i>Saved properties
              </p>
              <p class="card-text">
                <i class="fa-solid fa-key me-2 mb-5"></i>My Properties
              </p>
            </div>
            <div className="mb-3">
              <button
                type="button"
                class="btn btn-light border w-100 text-start "
              >
                Logout<i class="fa-solid fa-arrow-right offset-7 "></i>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-9 offset-lg-4 d-none d-lg-block">
          <h6>
            <i class="fa-solid fa-book me-2 mt-3 text-primary" />
            My Projects
          </h6>
          <hr></hr>
          <div className="d-flex row  row-cols-lg-3 ">
            <div class=" col card  rounded-4 border-0 position-relative">
              <img
                class="card-img-top ratio ratio-1x1 p-1 mt-2 rounded-5 opacity-75"
                height={200}
                src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                alt="Card image cap"
              />
              <div className="position-absolute top-0 mt-3 me-3 bg-white end-0 ">
              <i class="fa-solid fa-trash bg-white text-danger "></i>
              </div>
             

              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p class="card-title">Project Title Goes Here</p>
                    <small className="text-muted">22 September 2023</small>
                  </div>
                  <div>
                    <i class="fa-solid fa-pen-to-square text-success"></i>
                    <small className="text-success">Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col card  rounded-4 border-0 position-relative">
              <img
                class="card-img-top ratio ratio-1x1 p-1 mt-2 rounded-5 opacity-75 "
                height={200}
                src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                alt="Card image cap"
              />
              <div className="position-absolute top-0 mt-3 me-3 bg-white end-0 ">
              <i class="fa-solid fa-trash bg-white text-danger "></i>
              </div>
             

              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p class="card-title">Project Title Goes Here</p>
                    <small className="text-muted">22 September 2023</small>
                  </div>
                  <div>
                    <i class="fa-solid fa-pen-to-square text-success"></i>
                    <small className="text-success">Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col card  rounded-4 border-0 position-relative">
              <img
                class="card-img-top ratio ratio-1x1 p-1 mt-2 rounded-5 opacity-75 "
                height={200}
                src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                alt="Card image cap"
              />
              <div className="position-absolute top-0 mt-3 me-3 bg-white end-0 ">
              <i class="fa-solid fa-trash bg-white text-danger "></i>
              </div>
             

              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p class="card-title">Project Title Goes Here</p>
                    <small className="text-muted">22 September 2023</small>
                  </div>
                  <div>
                    <i class="fa-solid fa-pen-to-square text-success"></i>
                    <small className="text-success">Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col card  rounded-4 border-0 position-relative">
              <img
                class="card-img-top ratio ratio-1x1 p-1 mt-2 rounded-5 opacity-75 "
                height={200}
                src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                alt="Card image cap"
              />
              <div className="position-absolute top-0 mt-3 me-3 bg-white end-0 ">
              <i class="fa-solid fa-trash bg-white text-danger "></i>
              </div>
             

              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p class="card-title">Project Title Goes Here</p>
                    <small className="text-muted">22 September 2023</small>
                  </div>
                  <div>
                    <i class="fa-solid fa-pen-to-square text-success"></i>
                    <small className="text-success">Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col card  rounded-4 border-0 position-relative">
              <img
                class="card-img-top ratio ratio-1x1 p-1 mt-2 rounded-5 opacity-75"
                height={200}
                src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                alt="Card image cap"
              />
              <div className="position-absolute top-0 mt-3 me-3 bg-white end-0 ">
              <i class="fa-solid fa-trash bg-white text-danger "></i>
              </div>
             

              <div class="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <p class="card-title">Project Title Goes Here</p>
                    <small className="text-muted">22 September 2023</small>
                  </div>
                  <div>
                    <i class="fa-solid fa-pen-to-square text-success"></i>
                    <small className="text-success">Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded-4  bg_light_blue position-relative  " height={200}>
            <Image
            src={Add}
            className="position-absolute top-50 start-50 translate-middle "
            ></Image>
            </div>
          </div>
        </div> */}
        
        <div className="col-lg-8 offset-lg-4 mt-3 ">
          <div className="d-flex">
          <i class="fa-regular fa-square-caret-left d-lg-none "></i>
            <i class="fa-solid d-none d-lg-inline fa-book me-2 text-primary" />
            <span className="mt-0 text-bolder offset-lg-0 offset-4">
              My Projects
            </span>
          </div>

          <hr></hr>
          <div className="h-100 w-100 bg_light_blue">
            <div className="text-center ">
              <Image src={AddProject} className="mt-5 w-lg-25"></Image>

              <p className="text-muted text-wrap">
                Increase your profile's visibility to customers by adding
                projects.
              </p>
              <button type="button" class="btn btn-primary btn-sm mb-5">
                <i class="fa-solid fa-plus"></i>ADD PROJECT
              </button>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none mt-3">
        <i class="fa-regular fa-square-caret-left "></i>

          <span className="text-center mt-0 offset-4 text-bolder">
            My Projects
          </span>
          <hr></hr>
          <div class="card mb-3 rounded-3 border-0 mt-3">
            <div class="row g-0">
              <div class="col-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                  class="img-fluid rounded-4 w-100"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body mt-0">
                  <p class="card-title mb-0  ">
                    <small>Project Title Goes Here</small>
                  </p>
                  <small className="text-muted ">22 September 2023</small>
                  <div className="text-end mt-2">
                    <small className="text-primary fw-bold">edit</small>
                    <small className="text-danger fw-bold ms-3">delete</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-3 border-0 ">
            <div class="row g-0">
              <div class="col-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                  class="img-fluid rounded-4 w-100"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <p class="card-title mb-0">
                    <small>Project Title Goes Here</small>
                  </p>
                  <small className="text-muted ">22 September 2023</small>
                  <div className="text-end mt-2">
                    <small className="text-primary fw-bold">edit</small>
                    <small className="text-danger  fw-bold ms-3">delete</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-3 border-0 ">
            <div class="row g-0">
              <div class="col-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                  class="img-fluid rounded-4 w-100"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <p class="card-title mb-0">
                    <small>Project Title Goes Here</small>
                  </p>
                  <small className="text-muted ">22 September 2023</small>
                  <div className="text-end mt-2">
                    <small className="text-primary fw-bold">edit</small>
                    <small className="text-danger ms-3 fw-bold">delete</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-3 border-0 ">
            <div class="row g-0">
              <div class="col-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/cb25/ba28/762b02fbd43477608d72d7bccb89d85b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g3aPCwjOGF4fzGkdULETljj6wKBYB2kUgyizVqA4Qq5SyAMmApUCb4VknNxfpVx0j5s68VeSCgTtGhX59gcqaHnGKwORcMz2VqBYRxKW5QsYYwHoZFVziuhnmGEa2~abF3FnFYAE9vrIrN9R5O52cKv6tGL9G~HavkcwlodCq1od-6QBqD5SArgkMNeS2L8JmvJdUigk~DFpg3KkyVxkzLyqbecChKzzvj7lewEVUPvJNaAULROP7dWVb0pObXWcoiI68DK-WIM7laAd3uu0juTkLJfN8HjSPeSLR7Y8afA5LqKX1uLN2o4Jrguu5BqIRXeTID-H647oSqMO6obmrA__"
                  class="img-fluid rounded-4 w-100"
                  alt="..."
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <p class="card-title mb-0">Project Title Goes Here</p>
                  <small className="text-muted ">22 September 2023</small>
                  <div className="text-end mt-2">
                    <small className="text-primary fw-bold">edit</small>
                    <small className="text-danger fw-bold ms-3">delete</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-sm-none ">
        <i class="fa-regular fa-square-caret-left "></i>
          <span className="text-center mt-0 offset-3 text-bolder">
            Project Title Goes Here
          </span>
          <hr></hr>
          <div>
            <h5>Project Title Goes Here - Lorem ipsum consectetur.</h5>
            <div>
              <h6 className="mt-4">More Information</h6>
              <div className="d-flex border p-2 rounded-4">
                <i class="fa-solid fa-business-time mt-2 text-primary"></i>
                <div class="input-group ">
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Duration"
                    aria-label="Recipient's username"
                  />

                  <span class="input-group-text bg-white fw-bold border-0">
                    3 Months
                  </span>
                </div>
              </div>
              <div className="d-flex border  mt-2 p-2 rounded-4">
              <i class="fa-solid fa-location-dot mt-2 text-primary"></i>
                <div class="input-group ">
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Duration"
                    aria-label="Recipient's username"
                  />

                  <span class="input-group-text bg-white fw-bold border-0">
                    Mysore
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h6 className="fw-bold">About Project</h6>
              <small className="text-muted  mt-3 text-wrap">Lorem ipsum dolor sit amet consectetur. Eros curabitur semper quam cursus nunc in non adipiscing sed. Proin sed aenean lacus ultricies condimentum tristique. Tristique eget semper nunc nisl egestas leo egestas. Pellentesque sollicitudin dignissim pulvinar faucibus purus.</small>
            </div>
            <div className="mt-3">
              <h6>Skills</h6>
              <div className="d-flex row row-cols-3 ms-1 ">
              <span class="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 1</span>
              <span class="badge badge-pill badge-light text-dark border text-muted mt-2" >Skill Option 1</span>
              <span class="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 1</span>
              <span class="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 1</span>
              <span class="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 1</span>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-evenly">
            <button type="button" class="btn border-danger btn-sm w-50 border-2 rounded-3 text-danger fw-bold">DELETE</button>
            <button type="button" class="btn btn-primary btn-sm w-50 ms-3 rounded-3 fw-bold ">EDIT</button>
            </div>
            <div className="mt-3">
              <div>
                <Image src={ProjectImage1} className="w-100"></Image>
              </div>
              <div>
                <Image src={ProjectImage2} className="w-100"></Image>
              </div>
              <div>
                <Image src={ProjectCVideo1} className="w-100"></Image>
              </div>
              <div>
                <Image src={ProjectCVideo2} className="w-100 h-75"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
