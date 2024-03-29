import React from "react";

class Header extends React.Component {
  render() {
    const VALUES = this.props.data;
    return (
      <div>
        {VALUES.map((data) => {
          return (
            <header>
              <div id="header-left" class="header-group">
                <div class="search-group sidebar-item">
                  <span>
                    <img src={require("../images/icons/fb.png")} alt="" />
                  </span>
                  <span>
                    <div>
                      <span id="search-icon">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          width="1em"
                          height="1em"
                          class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh gl3lb2sf hhz5lgdu"
                        >
                          <g
                            fill-rule="evenodd"
                            transform="translate(-448 -544)"
                          >
                            <g fill-rule="nonzero">
                              <path
                                d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                transform="translate(448 544)"
                              ></path>
                              <path
                                d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                transform="translate(448 544)"
                              ></path>
                              <path
                                d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                transform="translate(448 544)"
                              ></path>
                              <path
                                d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                transform="translate(448 544)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span>
                        <input
                          type="text"
                          name=""
                          id="searchInput"
                          class="input"
                          placeholder="Search Facebook"
                        />
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <div id="header-center" class="header-group">
              </div>
              <div id="header-right" class="header-group">
                <div class="header-group">
                  <div class="profile-group">
                    <span>
                      <img src="images/user-01.jpg" alt="" />
                    </span>
                    <span>{data.name}</span>
                  </div>
                  <span>
                    <div class="icon-svg">
                      <svg viewBox="0 0 44 44">
                        <circle cx="7" cy="7" r="6"></circle>
                        <circle cx="22" cy="7" r="6"></circle>
                        <circle cx="37" cy="7" r="6"></circle>
                        <circle cx="7" cy="22" r="6"></circle>
                        <circle cx="22" cy="22" r="6"></circle>
                        <circle cx="37" cy="22" r="6"></circle>
                        <circle cx="7" cy="37" r="6"></circle>
                        <circle cx="22" cy="37" r="6"></circle>
                        <circle cx="37" cy="37" r="6"></circle>
                      </svg>
                    </div>
                  </span>
                  <span>
                    <div class="icon-svg">
                      <svg
                        viewBox="0 0 28 28"
                        alt=""
                        class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 rs22bh7c"
                        fill="currentColor"
                        height="20"
                        width="20"
                      >
                        <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
                      </svg>
                    </div>
                  </span>
                  <span>
                    <div class="icon-svg">
                      <svg
                        viewBox="0 0 28 28"
                        alt=""
                        class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 rs22bh7c"
                        fill="currentColor"
                        height="20"
                        width="20"
                      >
                        <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
                      </svg>
                    </div>
                  </span>
                  <span>
                    <div class="icon-svg">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        width="1em"
                        height="1em"
                        class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 rs22bh7c jnigpg78 odw8uiq3"
                      >
                        <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </header>
          );
        })}
      </div>
    );
  }
}

export default Header;
