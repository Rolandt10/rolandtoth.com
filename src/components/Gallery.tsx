import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <LightGallery plugins={[lgZoom]} mode="lg-fade">
      <div
        id="lightgallery"
        className="mx-auto flex w-full max-w-[1200px] flex-wrap justify-center gap-6"
      >
        <a
          data-lg-size="1406-1390"
          className="gallery-item flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-7 transition duration-200 max-sm:aspect-square max-sm:h-auto max-sm:min-w-[130px] max-sm:max-w-[calc(50%-1rem)] max-sm:flex-1 max-sm:p-5 dark:border-dark-500/50 dark:bg-dark-700/60 dark:hover:border-dark-400/30"
          data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
            className="img-responsive m-auto max-h-full max-w-full rounded-md"
            src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>

        <a
          data-lg-size="1400-1400"
          data-pinterest-text="Shinimamiya, Osaka, Japan"
          data-tweet-text="Shinimamiya, Osaka, Japan"
          className="gallery-item flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-7 transition duration-200 max-sm:aspect-square max-sm:h-auto max-sm:min-w-[130px] max-sm:max-w-[calc(50%-1rem)] max-sm:flex-1 max-sm:p-5 dark:border-dark-500/50 dark:bg-dark-700/60 dark:hover:border-dark-400/30"
          data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
        >
          <img
            className="img-responsive m-auto max-h-full max-w-full rounded-md"
            src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>

        <a
          data-lg-size="1400-1400"
          className="gallery-item flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-7 transition duration-200 max-sm:aspect-square max-sm:h-auto max-sm:min-w-[130px] max-sm:max-w-[calc(50%-1rem)] max-sm:flex-1 max-sm:p-5 dark:border-dark-500/50 dark:bg-dark-700/60 dark:hover:border-dark-400/30"
          data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
        >
          <img
            className="img-responsive m-auto max-h-full max-w-full rounded-md"
            src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>

        <a
          data-lg-size="1400-1400"
          className="gallery-item flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-7 transition duration-200 max-sm:aspect-square max-sm:h-auto max-sm:min-w-[130px] max-sm:max-w-[calc(50%-1rem)] max-sm:flex-1 max-sm:p-5 dark:border-dark-500/50 dark:bg-dark-700/60 dark:hover:border-dark-400/30"
          data-iframe="true"
          data-src="https://www.lightgalleryjs.com/pdf/sample.pdf"
        >
          <img
            className="img-responsive m-auto max-h-full max-w-full rounded-md"
            src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
          />
        </a>

        <a
          className="gallery-item flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-7 transition duration-200 max-sm:aspect-square max-sm:h-auto max-sm:min-w-[130px] max-sm:max-w-[calc(50%-1rem)] max-sm:flex-1 max-sm:p-5 dark:border-dark-500/50 dark:bg-dark-700/60 dark:hover:border-dark-400/30"
          data-src="https://www.youtube.com/watch?v=egyIeygdS_E&mute=0"
          key="4"
        >
          <img
            className="img-responsive m-auto max-h-full max-w-full rounded-md"
            alt=""
            src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
          />
        </a>

        <a
          data-lg-size="1406-1390"
          className="gallery-item flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-7 transition duration-200 max-sm:aspect-square max-sm:h-auto max-sm:min-w-[130px] max-sm:max-w-[calc(50%-1rem)] max-sm:flex-1 max-sm:p-5 dark:border-dark-500/50 dark:bg-dark-700/60 dark:hover:border-dark-400/30"
          data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
            className="img-responsive m-auto max-h-full max-w-full rounded-md"
            src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>

        <a
          data-lg-size="1400-1400"
          data-pinterest-text="Shinimamiya, Osaka, Japan"
          data-tweet-text="Shinimamiya, Osaka, Japan"
          className="gallery-item flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-7 transition duration-200 max-sm:aspect-square max-sm:h-auto max-sm:min-w-[130px] max-sm:max-w-[calc(50%-1rem)] max-sm:flex-1 max-sm:p-5 dark:border-dark-500/50 dark:bg-dark-700/60 dark:hover:border-dark-400/30"
          data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
        >
          <img
            className="img-responsive m-auto max-h-full max-w-full rounded-md"
            src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
      </div>
    </LightGallery>
  );
}

{
  /* <div id="gallery" class="flex">
          <ul class="flex w-full max-w-[1600px] flex-wrap justify-center gap-6 sm:flex-col sm:items-center">
            <li class="hover:border-zinc-700 flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-8 transition duration-300 sm:h-60 sm:w-60 md:h-56 md:w-56 dark:border-dark-400/40 dark:bg-dark-700">
              <img
                class="m-auto max-h-full max-w-full rounded-md"
                src="../../public/image-1.jpg"
                alt=""
              />
            </li>
            <li class="hover:border-zinc-700 flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-8 transition duration-300 sm:h-60 sm:w-60 md:h-56 md:w-56 dark:border-dark-400/40 dark:bg-dark-700">
              <img
                class="m-auto max-h-full max-w-full rounded-md"
                src="../../public/image-2.jpg"
                alt=""
              />
            </li>
            <li class="hover:border-zinc-700 flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-8 transition duration-300 sm:h-60 sm:w-60 md:h-56 md:w-56 dark:border-dark-400/40 dark:bg-dark-700">
              <img
                class="m-auto max-h-full max-w-full rounded-md"
                src="../../public/image-1.jpg"
                alt=""
              />
            </li>
            <li class="hover:border-zinc-700 flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-8 transition duration-300 sm:h-60 sm:w-60 md:h-56 md:w-56 dark:border-dark-400/40 dark:bg-dark-700">
              <img
                class="m-auto max-h-full max-w-full rounded-md"
                src="../../public/image-1.jpg"
                alt=""
              />
            </li>
            <li class="hover:border-zinc-700 flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-8 transition duration-300 sm:h-60 sm:w-60 md:h-56 md:w-56 dark:border-dark-400/40 dark:bg-dark-700">
              <img
                class="m-auto max-h-full max-w-full rounded-md"
                src="../../public/image-1.jpg"
                alt=""
              />
            </li>
            <li class="hover:border-zinc-700 flex h-52 w-52 cursor-zoom-in rounded-lg border border-solid p-8 transition duration-300 sm:h-60 sm:w-60 md:h-56 md:w-56 dark:border-dark-400/40 dark:bg-dark-700">
              <img
                class="m-auto max-h-full max-w-full rounded-md"
                src="../../public/image-1.jpg"
                alt=""
              />
            </li>
          </ul> */
}
