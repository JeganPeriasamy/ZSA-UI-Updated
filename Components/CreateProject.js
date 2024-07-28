"use client"

import Image from "next/image";
import ProjectImage1 from "../public/img/Group 22668.png";
import ProjectCVideo1 from "../public/img/Group 22666.png";
import ProjectImage2 from "../public/img/Rectangle 2470.png";
import ProjectCVideo2 from "../public/img/Rectangle 2468.png";
import ProjectMedia from "../public/img/undraw_searching_re_3ra9 1.png";
import { useState } from "react";



export default function Page() {

  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [dropdowns, setDropdowns] = useState({
    basicDetails: false,
    skills: false,
    projectMedia: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };


  const handleInputChange = (e) => {
    setSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (skill.trim() !== '') {
      setSkills([...skills, { name: skill.trim(), selected: false }]);
      setSkill('');
    }
  };

  const handleBadgeClick = (index) => {
    const newSkills = skills.map((skill, i) =>
      i === index ? { ...skill, selected: !skill.selected } : skill
    );
    setSkills(newSkills);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div>
      <div className="container container-overflow overflow-hidden d-none d-lg-block">
        <div className="d-flex  justify-content-between mt-3 bg-white p-3 position-">
          <h5>Create Project</h5>
          <div>
            <button type="button" class="btn border-secondary btn-sm">
              Back
            </button>
            <button type="button" class="btn btn-primary btn-sm ms-3">
              Save
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="">
              <div className="container container-overflow mt-2">
                <div className="row">
                  <div className="col-lg-3 d-none d-lg-block  ">
                    <div id="list-example" className="list-group  ">
                      <div className="position-fixed scrollspy-link shadow-sm pe-5  ">
                        <p className="ms-3 fw-bold mt-3">Menu</p>

                        <a
                          className="list-group-item list-group-item-action border-0"
                          href="#list-item-1"
                        >
                          Basic Details
                        </a>
                        <a
                          className="list-group-item list-group-item-action border-0"
                          href="#list-item-2"
                        >
                          Skills
                        </a>
                        <a
                          className="list-group-item list-group-item-action border-0"
                          href="#list-item-3"
                        >
                          Media
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-12">
                    <div
                      data-bs-spy="scroll"
                      data-bs-target="#list-example"
                      data-bs-smooth-scroll="true"
                      className="scrollspy-example"
                      tabIndex="0"
                    >
                      <div className="bg-white shadow-sm p-lg-4 p-3">
                        <p id="list-item-1" className="fw-bold">
                          Basic Details
                        </p>
                        <form>
                          <div
                            data-mdb-input-init
                            className="form-outline mb-2"
                          >
                            <label
                              className="form-label"
                              htmlFor="form6Example3"
                            >
                              Project Title
                            </label>
                            <input
                              type="text"
                              id="form6Example3"
                              className="form-control"
                              placeholder="Enter Your Address"
                            />
                          </div>

                          <div
                            data-mdb-input-init
                            className="form-outline mb-2"
                          >
                            <label
                              className="form-label "
                              htmlFor="form6Example7"
                            >
                              Description
                            </label>
                            <textarea
                              className="form-control"
                              id="form6Example7"
                              rows="4"
                              placeholder="write about Project"
                            ></textarea>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div data-mdb-input-init className="form-outline">
                                <label
                                  className="form-label "
                                  htmlFor="form6Example1"
                                >
                                  Duration
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    id="form6Example1"
                                    className="form-control"
                                    placeholder="Enter Project duration"
                                  />
                                  <span
                                    class="input-group-text bg-none text-success"
                                    id="basic-addon2"
                                  >
                                    Months
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div data-mdb-input-init className="form-outline">
                                <label
                                  className="form-label  "
                                  htmlFor="form6Example2"
                                >
                                  City
                                </label>
                                <select
                                  class="form-select  "
                                  aria-label="Default select example "
                                >
                                  <option selected>Select city</option>
                                  <option value="1">Mysore</option>
                                  <option value="2">Bengaluru</option>
                                  <option value="3">Delhi</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <div className="mt-3 bg-white shadow-sm p-lg-4 p-3">
                        <p id="list-item-2 " className="fw-bold">
                          Skills used in project
                        </p>
                        <div className="row">
                          <div className="col">
                            <div data-mdb-input-init className="form-outline">
                              <label
                                className="form-label "
                                htmlFor="form6Example1"
                              >
                                Skills
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  id="form6Example1"
                                  className="form-control"
                                  placeholder="Enter skill"
                                />
                              </div>
                              <div className="d-flex row row-cols-4 ms-1 gap-2 ">
                                <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                                  Skill Option 1
                                </span>
                                <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                                  Skill Option 1
                                </span>
                                <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                                  Skill Option 1
                                </span>
                                <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                                  Skill Option 1
                                </span>
                                <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                                  Skill Option 1
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div> */}
    
      <div className="mt-3 bg-white shadow-sm p-lg-4 p-3">
      <p id="list-item-2" className="fw-bold">
        Skills used in project
      </p>
      <div className="row">
        <div className="col">
          <div data-mdb-input-init className="form-outline">
            <label className="form-label" htmlFor="skillInput">
              Skills
            </label>
            <div className="input-group">
              <input
                type="text"
                id="skillInput"
                className="form-control"
                placeholder="Enter skill"
                value={skill}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <button type="button" onClick={handleAddSkill} className="btn btn-primary btn-sm ms-2">
                Add Skill
              </button>
            </div>
            <div className="d-flex row row-cols-4 ms-1 gap-2 mt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`badge badge-pill text-dark border mt-2 ${skill.selected ? 'text-success border-success' : 'text-muted'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleBadgeClick(index)}
                >
                  {skill.selected && <i className="fa fa-check me-1  text-muted "></i>}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
                      <div className="mt-3 shadow-sm p-lg p-3 ">
                        <div className="d-flex justify-content-between mt-3 ">
                          <p id="list-item-3" className="fw-bold">
                            Project Media
                          </p>
                          <p className="text-primary">
                            <i class="fa-solid fa-plus"></i>Add images or videos
                          </p>
                        </div>
                        <hr></hr>
                        <div className="h-100 w-100 bg_light_blue mb-5  p-4">
                          <div className="text-center ">
                            <Image src={ProjectMedia} className=""></Image>
                            <p className="">Request to upload a project</p>
                            <p className="text-muted text-wrap">
                              Drag & Drop images or videos to showcase your
                              project. It should less than 15MB.
                            </p>
                            <button
                              type="button"
                              class="btn border-success text-success"
                            >
                              BROWSE FILES
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="d-none d-lg-block">
                            <div className="row">
                              <div className="col">
                                <Image src={ProjectImage1} width={200}></Image>
                              </div>
                              <div className="col">
                                <Image src={ProjectCVideo1} width={200}></Image>
                              </div>
                              <div className="col">
                                <Image src={ProjectImage2} width={200}></Image>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <Image src={ProjectCVideo2} width={500}></Image>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg_light_blue mt-3 text-center w-100 p-4 ">
                        <p>
                          <i class="fa-regular fa-square-plus me-2 text-primary"></i>
                          Add images or videos to showcase your project
                        </p>
                      </div>
                      <div className="mt-3 bg-white shadow-sm p-lg p-3 d-flex justify-content-end">
                        <button
                          type="button"
                          class="btn border-dark text-dark me-3"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary text-white"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container d-lg-none">
        <div className="bg-white p-3">
          <i class="fa-solid fa-angle-left text-start"></i>
          <span className="text-center mt-0 offset-3 text-bolder fw-bold fs-5 ">
            Create Project
          </span>
        </div>

        <div class="dropdown bg-white  mb-2 p-2 rounded-4 border-0">
          <button
            class="btn bg-white col-12 text-start border-0"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex justify-content-between">
              <p className="fw-bold">Basic Details</p>
              <i class="fa-solid fa-chevron-down  text-success"></i>
            </div>
          </button>
          <ul
            class="dropdown-menu mt-2 rounded-4 border-0 "
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a class="dropdown-item bg-white " href="#">
                <form className="">
                  <div data-mdb-input-init className="form-outline mb-2 ">
                    <label
                      className="form-label text-muted"
                      htmlFor="form6Example3"
                    >
                      Project Title
                    </label>
                    <input
                      type="text"
                      id="form6Example3"
                      className="form-control"
                      placeholder="Enter Your Address"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-2">
                    <label
                      className="form-label text-muted"
                      htmlFor="form6Example7"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="form6Example7"
                      rows="4"
                      placeholder="write about Project"
                    ></textarea>
                  </div>

                  <div data-mdb-input-init className="form-outline">
                    <label
                      className="form-label text-muted"
                      htmlFor="form6Example1"
                    >
                      Duration
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control"
                        placeholder="Enter Project duration"
                      />
                      <span
                        class="input-group-text bg-none text-success"
                        id="basic-addon2"
                      >
                        Months
                      </span>
                    </div>
                  </div>

                  <div data-mdb-input-init className="form-outline">
                    <label
                      className="form-label text-muted  "
                      htmlFor="form6Example2"
                    >
                      City
                    </label>
                    <select
                      class="form-select  "
                      aria-label="Default select example "
                    >
                      <option selected>Select city</option>
                      <option value="1">Mysore</option>
                      <option value="2">Bengaluru</option>
                      <option value="3">Delhi</option>
                    </select>
                  </div>
                </form>
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown mb-2 p-2 rounded-4 border-0">
          <button
            class="btn bg-white text-start col-12"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex justify-content-between">
              <p className="fw-bold">Skills</p>
              <i class="fa-solid fa-chevron-down text-success"></i>
            </div>
          </button>
          <ul
            class="dropdown-menu bg-white border-0"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a class="dropdown-item " href="#">
                <div className="mt-3 bg-white ">
                  <div data-mdb-input-init className="form-outline">
                    <label className="form-label " htmlFor="form6Example1">
                      Skills
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control"
                        placeholder="Enter skill"
                      />
                    </div>
                    <div className="d-flex row row-cols-3 ms-1 ">
                      <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                        Skill Option 1
                      </span>
                      <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                        Skill Option 1
                      </span>
                      <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                        Skill Option 1
                      </span>
                      <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                        Skill Option 1
                      </span>
                      <span class="badge badge-pill badge-light text-dark border text-muted mt-2">
                        Skill Option 1
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown mb-2 p-2 rounded-4 border-0 ">
          <button
            class="btn bg-white text-start col-12"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="d-flex justify-content-between">
              <p className="fw-bold">Project Media</p>
              <i class="fa-solid fa-chevron-down text-success"></i>
            </div>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item bg_light_blue" href="#">
                <div className="mt-3 p-lg p-3 ">
                  <div className="d-flex justify-content-between">
                    <p>Project Media</p>
                    <p className="text-primary">
                      <i class="fa-solid fa-plus text-primary"></i>Add
                    </p>
                  </div>
                  <div className="h-100 w-100 bg_light_blue ">
                    <div className="text-center ">
                      <Image src={ProjectMedia} className=""></Image>
                      <p className="fw-bold mb-0">
                        Request to upload a project
                      </p>
                      <p className="text-muted text-wrap ">
                        Drag & Drop images or videos to showcase your project.
                        It should less than 15MB.
                      </p>
                      <button
                        type="button"
                        class="btn border-success  btn-sm  text-success"
                      >
                        BROWSE FILES
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-3 shadow-sm p-lg p-3 d-flex justify-content-evenly">
          <button
            type="button"
            className="btn w-100 back border-0 text-dark me-3"
          >
            Back
          </button>
          <button type="button" class="btn btn-primary w-100  text-white">
            Save
          </button>
        </div>
      </div> */}
       <div className="container d-lg-none">
      <div className="bg-white p-3">
      <i class="fa-regular fa-square-caret-left"></i>
        <span className="text-center mt-0 offset-3 text-bolder fw-bold fs-5 ">
          Create Project
        </span>
      </div>

      <div className="dropdown bg-white mb-2 p-2 rounded-4 border-0">
        <button
          className="btn bg-white col-12 text-start border-0"
          type="button"
          onClick={() => toggleDropdown('basicDetails')}
        >
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Basic Details</p>
            {dropdowns.basicDetails ? (
              <i class="fa-solid fa-chevron-up text-success"></i>
            ) : (
              <i className="fa-solid fa-chevron-down text-success"></i>
            )}
           
          </div>
        </button>
        {dropdowns.basicDetails && (
          <ul className="dropdown-menu mt-2 rounded-4 border-0 show">
            <li>
              <a className="dropdown-item bg-white" href="#">
                <form>
                  <div data-mdb-input-init className="form-outline mb-2 mt-0">
                    <label className="form-label " htmlFor="form6Example3">Project Title</label>
                    <input type="text" id="form6Example3" className="form-control text-muted" placeholder="Enter Your Address" />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label " htmlFor="form6Example7">Description</label>
                    <textarea className="form-control" id="form6Example7" rows="4" placeholder="Write about Project"></textarea>
                  </div>

                  <div data-mdb-input-init className="form-outline">
                    <label className="form-label " htmlFor="form6Example1">Duration</label>
                    <div className="input-group">
                      <input type="text" id="form6Example1" className="form-control" placeholder="Enter Project duration" />
                      <span className="input-group-text bg-none text-success" id="basic-addon2">Months</span>
                    </div>
                  </div>

                  <div data-mdb-input-init className="form-outline">
                    <label className="form-label " htmlFor="form6Example2">City</label>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Select city</option>
                      <option value="1">Mysore</option>
                      <option value="2">Bengaluru</option>
                      <option value="3">Delhi</option>
                    </select>
                  </div>
                </form>
              </a>
            </li>
          </ul>
        )}
      </div>

      <div className="dropdown mb-2 p-2 rounded-4 border-0">
        <button
          className="btn bg-white text-start col-12"
          type="button"
          onClick={() => toggleDropdown('skills')}
        >
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Skills</p>
            {dropdowns.skills ? (
              <i class="fa-solid fa-chevron-up text-success"></i>
            ) : (
              <i className="fa-solid fa-chevron-down text-success"></i>
            )}
          </div>
        </button>
        {dropdowns.skills && (
          <ul className="dropdown-menu bg-white border-0 show">
            <li>
              <a className="dropdown-item" href="#">
                <div className="mt-3 bg-white">
                  <div data-mdb-input-init className="form-outline">
                    <label className="form-label" htmlFor="form6Example1">Skills</label>
                    <div className="input-group">
                      <input type="text" id="form6Example1" className="form-control" placeholder="Enter skill" />
                    </div>
                    <div className="d-flex row row-cols-3 ms-1">
                      <span className="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 1</span>
                      <span className="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 2</span>
                      <span className="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 3</span>
                      <span className="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 4</span>
                      <span className="badge badge-pill badge-light text-dark border text-muted mt-2">Skill Option 5</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        )}
      </div>

      <div className="dropdown mb-2 p-2 rounded-4 border-0">
        <button
          className="btn bg-white text-start col-12"
          type="button"
          onClick={() => toggleDropdown('projectMedia')}
        >
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Project Media</p>
            {dropdowns.projectMedia ? (
              <i class="fa-solid fa-chevron-up text-success"></i>
            ) : (
              <i className="fa-solid fa-chevron-down text-success"></i>
            )}
          </div>
        </button>
        {dropdowns.projectMedia && (
          <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton3">
            <li>
              <a className="dropdown-item bg_light_blue" href="#">
                <div className="mt-3 p-lg p-3">
                  <div className="d-flex justify-content-between">
                    <p>Project Media</p>
                    <p className="text-primary">
                      <i className="fa-solid fa-plus text-primary"></i>Add
                    </p>
                  </div>
                  <div className="h-100 w-100 bg_light_blue">
                    <div className="text-center">
                    <Image src={ProjectMedia} className=""></Image>
                      <p className="fw-bold mb-0">Request to upload a project</p>
                      <p className="text-muted text-wrap">Drag & Drop images or videos to showcase your project. It should be less than 15MB.</p>
                      <button type="button" className="btn border-success btn-sm text-success">BROWSE FILES</button>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-3 shadow-sm p-lg p-3 d-flex justify-content-evenly sticky-footer">
        <button type="button" className="btn w-100 back border-0 text-dark me-3">Back</button>
        <button type="button" className="btn btn-primary w-100 text-white">Save</button>
      </div>
    </div>
    </div>
  );
}
