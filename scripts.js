// Sample data
const data = [
  {
    id: "1",
    name: "Naruto",
    img: "./Asset/Naruto.jpg",
    source: "./Asset/naruto.mp4",
    time: "02:22",
    record: "Created on 01 jan 2000",
    description: `Naruto is a Japanese anime and manga series that chronicles the adventures of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, despite being an outcast. Focused on themes of friendship, perseverance, and self-discovery, it blends action-packed battles with heartfelt storytelling.`,
  },
  {
    id: "2",
    name: "lion king",
    img: "./Asset/lion-king.jpg",
    source: "./Asset/The Lion King.mp4",
    time: "04:06",
    record: "Created on 05 Feb 2001",
    description: `The Lion King is a timeless animated classic that follows the journey of Simba, a young lion cub who must reclaim his throne after the tragic death of his father, King Mufasa. Filled with memorable characters and poignant themes of responsibility and redemption, it's a heartwarming tale beloved by audiences of all ages.`,
  },
  {
    id: "3",
    name: "Game of Thrones",
    img: "./Asset/GOT.jpg",
    source: "./Asset/Game of Thrones.mp4",
    time: "03:28",
    record: "Created on 10 March 2005",
    description: `Game of Thrones is a sprawling epic fantasy TV series based on George R.R. Martin's novels, set in the fictional continents of Westeros and Essos. It explores the power struggles, alliances, and betrayals among noble families vying for control of the Iron Throne, amidst supernatural threats and political intrigue, making it a cultural phenomenon.`,
  },
  {
    id: "4",
    name: "Vikings",
    img: "./Asset/vikings.jpg",
    source: "./Asset/Vikings Season 1 Trailer (1080p).mp4",
    time: "02:28",
    record: "Created on 04 Oct 2000",
    description: `Vikings is a historical drama series inspired by the legendary Norse hero Ragnar Lothbrok and his descendants, who raid and explore new territories during the Viking Age. Known for its gritty realism and complex characters, it delves into themes of ambition, warfare, and cultural clashes as the Vikings navigate both their inner conflicts and external conquests.`,
  },
];

function generateVideoCards() {
  console.log("1111111111");
  const videoGrid = document.getElementById("video-grid");
  videoGrid.innerHTML = "";
  data.forEach((item) => {
    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");

    videoCard.innerHTML = `
      <div style="position: relative">
      <input type="checkbox" id="checkbox" class="checkbox" style=" width: 20px; height: 20px;position: absolute;top: 10px;left: 20px;">
        <img src="${item.img}" alt="Video Thumbnail" class="video-thumbnail" style="width: 100%; height: 200px; border-radius: 10px; cursor: pointer;" />
        <span style="position: absolute; bottom: 10px; right: 10px; background-color: rgba(0, 0, 0, 0.7); color: white; padding: 5px 10px; border-radius: 3px;">${item.time}</span>
        <div style="position: absolute; top: 10px; right: 10px;">
          <i class="fa-solid fa-globe" style="color: white;"></i>
          <i class="fa-solid fa-video" style="color: white;"></i>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h3 style="margin: 0; font-size: 16px">${item.name}</h3>
          <p style="margin: 5px 0 10px; font-size: 14px; color: #666">Recorded on 01 Jan 2000</p>
        </div>
        <div style="width: 50px; display: flex; justify-content: space-between; align-items: center;">
          <i class="fas fa-edit edit-icon" style="cursor: pointer;"></i>
          <i class="fa-solid fa-trash delete-icon" style="cursor: pointer;"></i>
        </div>
      </div>
    `;

    const img = videoCard.querySelector(".video-thumbnail");
    const editIcon = videoCard.querySelector(".edit-icon");
    const deleteIcon = videoCard.querySelector(".delete-icon");

    img.addEventListener("click", () => showVideoDetails(item));
    editIcon.addEventListener("click", (event) => {
      showEditPopover();
    });
    deleteIcon.addEventListener("click", (event) => {
      showDeletePopover();
    });

    videoGrid.appendChild(videoCard);
  });
}

function showEditPopover() {
  const modal = document.getElementById("editModal");
  modal.style.display = "flex";

  modal.innerHTML = `
    <div class="modal-content">
      <div style="font-size: 40px; color: orange;">
          <i class="fa-solid fa-circle-exclamation"></i>
      </div>
      <p>Do you realy want to edit the video?</p>
      <div class="modal-footer">
        <button id="confirmEdit" class="btn btnYes">YES</button>
        <button id="cancelEdit" class="btn">NO</button>
      </div>
    </div>
  `;

  const confirmEdit = document.getElementById("confirmEdit");
  const cancelEdit = document.getElementById("cancelEdit");

  confirmEdit.onclick = () => {
    modal.style.display = "none";
  };

  cancelEdit.onclick = () => {
    modal.style.display = "none";
  };
}

function showDeletePopover() {
  const modal = document.getElementById("deleteModal");
  modal.style.display = "flex";

  modal.innerHTML = `
    <div class="modal-content">
  <div style="font-size: 40px; color: orange;">
        <i class="fa-solid fa-circle-exclamation"></i>
    </div>
      <p>Do you realy want to delete the video?</p>
      <div class="modal-footer">
        <button id="confirmDelete" class="btn btnYes">YES</button>
        <button id="cancelDelete" class="btn">NO</button>
      </div>
    </div>
  `;

  const confirmDelete = document.getElementById("confirmDelete");
  const cancelDelete = document.getElementById("cancelDelete");

  confirmDelete.onclick = () => {
    modal.style.display = "none";
  };

  cancelDelete.onclick = () => {
    modal.style.display = "none";
  };
}

function showVideoDetails(video) {
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = `
           <div class="video-details">
      <div class="leftSideVideoDetails">
        <video width="100%" height="340" controls autoplay>
          <source src="${video.source}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="custom-seekbar">
          <input type="range" min="0" max="100" value="0" class="seekbar" id="custom-seekbar">
        </div>
        <div style="display: flex; justify-content: space-between;margin-top: 20px;">
          <div>
            <h2>${video.name}</h2>
            <p>${video.record}</p>
          </div>
          <div
            style="display: flex; justify-content: space-between; width: 60%;";
          >
            <button
              style="
                width: 30%;
                padding: 10px;
                color: white;
                background-color: black;
                cursor: pointer;
                border-radius: 20px;
              "
            >
              <i class="fa fa-share" style="margin-right: 5px"></i>
              Share
            </button>
            <button
              style="
                width: 30%;
                padding: 10px;
                color: white;
                background-color: black;
                cursor: pointer;
                border-radius: 20px;
              "
            >
              <i class="fas fa-pencil-alt" style="margin-right: 10px"></i>Edit
            </button>
          </div>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between;margin-top: 20px;">
            <button class="leftIcon">
            <i class="fa-solid fa-image"></i> Video thumbnail
            </button>
            <button class="leftIcon">
             <i class="fa-solid fa-vr-cardboard"></i> Virtual background
            </button>
          </div>
          <div style="display: flex; justify-content: space-between">
            <button class="leftIcon">
              <i class="fa-regular fa-hand"></i> Interactive CTAs
            </button>
            <button class="leftIcon">
             <i class="fa-solid fa-location-arrow"></i> Track video
            </button>
          </div>
        </div>

        <div
          style="
            padding: 20px;
            border: 1px solid gainsboro;
            border-radius: 10px;
            margin-top: 30px;
            background-color: #fff;
          "
        >
          <div style="display: flex; justify-content: space-around">
            <div>
              <h3>Last Watched</h3>
              <p>Last person watched details are shown here</p>
            </div>
            <div>
              <h5 style="text-align: right;">Anonymous view (217.XXX.108.XXX)</h5>
              <p style="text-align: right;">2023-02-17T16:28:38Z</p>
            </div>
          </div>
         <div
            style="border: 1px #ecf3fd solid; width: 100%; margin-top: 20px"
          ></div>
          <div
            style="
              display: flex;
              justify-content: space-around;
              margin-top: 20px;
            "
          >
            <div>
              <h3>Edit Scales page</h3>
              <p>Add/select/remove sales page template for this video</p>
            </div>
            <div>
              <h5 style="text-align: right;">New year greetings Scales page</h5>
              <div style="text-align: right;color:blue;text-decoration: underline;"><a href="#" style=" margin-right: 10px;">preview</a> 
              <a href="#" style=" margin-right: 10px;">edit</a> 
              <a href="#" style=" margin-right: 10px;">remove</a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightSideVideoDetails">
        <div>
        <p class="para">
          ${video.description}
        </p>
        </div>

        <div style="display: flex; margin-top: 10px">
          <div style="width: 80px">Folder</div>
          <div style="flex-grow: 1">
            <input type="text" placeholder="Test" style="width: 100%"    class="rightInput"/>
          </div>
        </div>

        <div style="display: flex; margin-top: 10px">
          <div style="width: 80px">Tags</div>
          <div style="flex-grow: 1">
            <input
              type="text"
              placeholder="click here to add tags"
              style="width: 100%"
              class="rightInput"
            />
          </div>
        </div>

        <div
          style="
            padding: 20px;
            border: 1px solid gainsboro;
            border-radius: 10px;
            margin-top: 20px;
            background-color: #fff;
          "
        >
          <div style="display: flex; justify-content: space-around">
            <div>
              <p style="text-align: center; margin: 0">132</p>
              <p style="text-align: center; margin: 0">Total plays</p>
            </div>
            <div style="border: 1px #ecf3fd solid; height: 50px"></div>
            <div>
              <p style="text-align: center; margin: 0">67</p>
              <p style="text-align: center; margin: 0">Unique Views</p>
            </div>
            <div style="border: 1px #ecf3fd solid; height: 50px"></div>
            <div>
              <p style="text-align: center; margin: 0">88%</p>
              <p style="text-align: center; margin: 0">Avg watch rate</p>
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-around;
              margin-top: 20px;
            "
          >
            <div>
              <p style="text-align: center; margin: 0">36</p>
              <p style="text-align: center; margin: 0">Full watch</p>
            </div>
            <div style="border: 1px #ecf3fd solid; height: 50px"></div>
            <div>
              <p style="text-align: center; margin: 0">12</p>
              <p style="text-align: center; margin: 0">Actions</p>
            </div>
            <div style="border: 1px #ecf3fd solid; height: 50px"></div>
            <div>
              <p style="text-align: center; margin: 0">Ind</p>
              <p style="text-align: center; margin: 0">Popular Region</p>
            </div>
          </div>
          <button class="rightBtn">
            View Detailed Reports
          </button>
        </div>
        <div
          style="
            padding: 20px;
            border: 1px solid gainsboro;
            border-radius: 10px;
            margin-top: 20px;
            background-color: #fff;
            line-height: 2rem;
          "
        >
          <div style="display: flex; justify-content: space-between">
            <p style="text-align: center; margin: 0">Player theme</p>
            <p style="text-align: center; margin: 0">#4080F0</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <p style="text-align: center; margin: 0">Player logo</p>
            <p style="text-align: center; margin: 0">BMW</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <p style="text-align: center; margin: 0">Privacy</p>
            <p style="text-align: center; margin: 0">Anyone with the link</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <p style="text-align: center; margin: 0">Subtitles</p>
            <p style="text-align: center; margin: 0">English</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <p style="text-align: center; margin: 0">Setting enabled</p>
            <div>
              <p style="text-align: center; margin: 0">Comments</p>
              <p style="text-align: center; margin: 0">Reactions</p>
              <p style="text-align: center; margin: 0">Playback speed</p>
            </div>
          </div>

          <button class="rightBtn">
            Change video settings
          </button>
        </div>
      </div>
    </div>
  `;

  const videoElement = mainContent.querySelector("video");
  const seekbar = mainContent.querySelector("#custom-seekbar");

  videoElement.addEventListener("timeupdate", function () {
    const currentTime = videoElement.currentTime;
    const duration = videoElement.duration;
    seekbar.value = (currentTime / duration) * 100;
  });

  seekbar.addEventListener("input", function () {
    const seekTo = videoElement.duration * (seekbar.value / 100);
    videoElement.currentTime = seekTo;
  });
}

document.addEventListener("DOMContentLoaded", generateVideoCards);
