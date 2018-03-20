This is a first MVP for aito project.
Here I will describe the architecture foe the website in static mode:

- README.md
- app.todo (aito.todo)
- package.json
- .gitignore
- webpack.config.js
- postcss.config.js
- node_modules/
- build/
    - favicon.ico
    - index.html
    - style.min.css
    - script.min.js
    - manifest.json
    - assets/
        - images/
            - compressed/
    - pages/*.html
- src/
    - js/
        - script.js
    - styles/
        - scss/*.scss
        - css/style.css



For styles we are usig sass ad postcss for style compilation.

Onlie guides:

Usig reset: https://www.webpagefx.com/blog/web-design/should-you-reset-your-css/

Centering: https://css-tricks.com/centering-css-complete-guide/

SASS architecture: 
https://www.sitepoint.com/architecture-in-sass/
http://matthewelsom.com/blog/simple-scss-playbook.html
https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization#architecture
https://medium.com/@elad/css-architecture-for-multiple-websites-with-sass-7e923fc53f7a
http://matthewelsom.com/blog/simple-scss-playbook.html

Image processing:
    This app uses ImageMagic for resizig icomig images.
    You ca read more about it i a SmashigMagazie blog post: https://www.smashingmagazine.com/2015/06/efficient-image-resizing-with-imagemagick/

    If you want to optimize a image for assests, do the following:
    Mac OS
    - Install Homebrew
    - Install ImageMagic via Homebrew: brew install imagemagick
    - Now you have a CLI for ImageMagic image processig
    - run this commad 
        magick mogrify -path OUTPUT_DIRECTORY(TEST/) -filter Triangle -define filter:support=2 -thumbnail OUTPUT_SIZE -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB IPUT_IMAGE
    usually it will be somethin like:
        magick mogrify -path OUTPUT_DIRECTORY(TEST/) -filter Triangle -define filter:support=2 -thumbnail OUTPUT_SIZE -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB IPUT_IMAGE


For animatios we might use: 

- menu trasitios: https://tympanus.net/Development/SidebarTransitions/
- lik aimatios https://tympanus.net/Development/CreativeLinkEffects/
https://tympanus.net/Development/InlineAnchorStyles/
- mobile modal effects
https://tympanus.net/Development/ModalWindowEffects/
https://tympanus.net/Development/SelectInspiration/index5.html
-buttons: https://tympanus.net/Development/CreativeButtons/
https://tympanus.net/Development/ButtonStylesInspiration/
- for icons: https://tympanus.net/Development/IconHoverEffects/
- menu trasitios: https://tympanus.net/Development/FullscreenLayoutPageTransitions/
https://tympanus.net/Development/OffCanvasMenuEffects/sideslide.html
https://tympanus.net/Development/MenuHoverEffects/tsula.html
https://tympanus.net/Blueprints/SlidePushMenus/
https://tympanus.net/Development/LineMenuStyles/
https://tympanus.net/Tutorials/AnimatedMenuIcon/
https://tympanus.net/Development/PerspectivePageViewNavigation/index.html
https://tympanus.net/Tutorials/AnimatedBorderMenus/index5.html
https://tympanus.net/Development/SidebarTransitions/
- maybe effect for logo https://tympanus.net/Development/TextStylesHoverEffects/
I like this subtle effects fior icons https://tympanus.net/Development/ClickEffects/


This is somethig cool: https://tympanus.net/Tutorials/NaturalLanguageForm/
