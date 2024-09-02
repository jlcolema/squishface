function cartTestTracking() {
  // Add tracking to "Make it a Bundle" clicks
  // 1. `pdp_product_only`
  // 2. `pdp_product_and_applicator`
  // 3. `pdp_product_and_product_and_applicator`
  // Add tracking to "One Time Purchase" and "Subscribe & Deliver" clicks
  // 1. `pdp_one_time_purchase`
  // 2. `pdp_subscribe_deliver`

  // Find all instances of `.variant-input`
  const variantInputs = document.querySelectorAll('.variant-input');

  // Loop through all the instances
  variantInputs.forEach(function(input) {
    // Attach a click event listener to each input
    input.addEventListener('click', function() {
      // Retrieve the value from the `data-value` attribute
      const value = input.getAttribute('data-value');

      // Determine what to do based on the value
      switch (value) {
        case 'Wrinkle Paste Only':
          gtag('event', 'pdp_product_only', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Wrinkle Paste + Applicator':
          gtag('event', 'pdp_product_and_applicator', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Wrinkle Paste + Wrinkle Wipes + Paste Applicator':
          gtag('event', 'pdp_product_and_product_and_applicator', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Tear Stain Paste Only':
          gtag('event', 'pdp_product_only', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Tear Stain Paste + Applicator':
          gtag('event', 'pdp_product_and_applicator', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Tear Stain Paste + Wrinkle Wipes + Applicator':
          gtag('event', 'pdp_product_and_product_and_applicator', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Tear Stain Paste + Wrinkle Wipes Only':
          gtag('event', 'pdp_product_only', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Wrinkle Paste + Wrinkle Wipes Only':
          gtag('event', 'pdp_product_only', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Wrinkle Paste + Wrinkle Wipes + Applicator':
          gtag('event', 'pdp_product_and_applicator', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Squishface Gift Box with Wrinkle Paste':
          gtag('event', 'pdp_product_only', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        case 'Squishface Gift Box with Tear Stain Paste':
          gtag('event', 'pdp_product_only', {
            vwo_test_dimension: 'vwo_2_testVariation'
          });
          break;
        // Add more cases as needed
        default:
          // Optional: Do something for unknown values
          break;
      }
    });
  });

  // Find all instances of `.sls-option-container`
  var slsOption = document.querySelectorAll('.sls-option-container');

  // Loop through all the instances
  slsOption.forEach(function(option) {
    // Attach a click event listener to each container
    option.addEventListener('click', function() {
      // Look for radio elements with data-type="one_time"
      const oneTimePurchase = option.querySelector('input[type="radio"][data-type="one_time"]');

      // Look for radio elements with data-type="subscription"
      const subscribeAndDeliver = option.querySelector('input[type="radio"][data-type="subscription"]');

      // Check if the radio with data-type="one_time" exists and is selected
      if (oneTimePurchase && oneTimePurchase.checked) {
        gtag('event', 'pdp_one_time_purchase', {
          vwo_test_dimension: 'vwo_2_testVariation'
        });
      }
      // Check if the radio with data-type="subscription" exists and is selected
      if (subscribeAndDeliver && subscribeAndDeliver.checked) {
        gtag('event', 'pdp_subscribe_deliver', {
          vwo_test_dimension: 'vwo_2_testVariation'
        });
      }
    });
  });
}

var onDocumentLoad = function () {
  // Add a class to the body for scoping
  document.body.classList.add("ti2");

	// Find each individual bundle option
	const options = document.querySelectorAll('.variant-input');

	// Function to set initial class based on checked status
  const setInitialClass = function() {
    options.forEach(option => {
      const inputElement = option.querySelector('input[type="radio"]');
      if (inputElement.checked) {
        option.classList.add('variant-input--is-selected');
      } else {
        option.classList.remove('variant-input--is-selected');
      }
    });
  };

	// Function to update class based on checked status
  const updateClass = function() {
    options.forEach(option => {
      const inputElement = option.querySelector('input[type="radio"]');
      if (inputElement.checked) {
        option.classList.add('variant-input--is-selected');
      } else {
        option.classList.remove('variant-input--is-selected');
      }
    });
  };

  // Check if any `.variant-input` elements exist
  if (options.length > 0) {
    options.forEach(option => {
      // Retrieve the value from the `data-value` attribute
      const value = option.getAttribute('data-value');

      // Change the label text
      if (option.getAttribute('data-value') === 'Wrinkle Paste + Wrinkle Wipes + Paste Applicator') {
        const labelElement = option.querySelector('label');
        if (labelElement) {
          labelElement.textContent = 'Wrinkle Paste + Wrinkle Wipes + Applicator';
        }
      }

      // Determine the image source and alt text based on the value
      let imgSrc, altText;
      switch (value) {
        case 'Wrinkle Paste Only':
          imgSrc = 'https://squishface.com/cdn/shop/products/09-HeroFront.jpg?v=1594909989&width=1080';
          altText = 'Image of Wrinkle Paste Only';
          break;
        case 'Wrinkle Paste + Applicator':
          imgSrc = 'https://storage.googleapis.com/images.trinity.one/Squishface/2023/SF-A-PDP-BundleOptimization-V1-Aug2023/Wrinkle%20Paste%20%2B%20Applicator.png';
          altText = 'Image of Wrinkle Paste + Applicator';
          break;
        case 'Wrinkle Paste + Wrinkle Wipes + Paste Applicator':
          imgSrc = 'https://storage.googleapis.com/images.trinity.one/Squishface/2023/SF-A-PDP-BundleOptimization-V1-Aug2023/Wrinkle%20Paste%20%2B%20Wrinkle%20Wipes%20%2B%20Applicator.png';
          altText = 'Image of Wrinkle Paste + Wrinkle Wipes + Paste Applicator';
          break;
        case 'Tear Stain Paste Only':
          imgSrc = 'https://squishface.com/cdn/shop/products/01-Hero.jpg?v=1596850153&width=1080';
          altText = 'Image of Tear Stain Paste Only';
          break;
        case 'Tear Stain Paste + Applicator':
          imgSrc = 'https://storage.googleapis.com/images.trinity.one/Squishface/2023/SF-A-PDP-BundleOptimization-V1-Aug2023/Tear%20Stain%20Paste%20%2B%20Applicator.png';
          altText = 'Image of Tear Stain Paste + Applicator';
          break;
        case 'Tear Stain Paste + Wrinkle Wipes + Applicator':
          imgSrc = 'https://storage.googleapis.com/images.trinity.one/Squishface/2023/SF-A-PDP-BundleOptimization-V1-Aug2023/Tear%20Stain%20Paste%20%2B%20Wrinkle%20Wipes%20%2B%20Applicator.png';
          altText = 'Image of Tear Stain Paste + Wrinkle Wipes + Applicator';
          break;
        case 'Tear Stain Paste + Wrinkle Wipes Only':
          imgSrc = 'https://storage.googleapis.com/images.trinity.one/Squishface/2023/SF-A-PDP-BundleOptimization-V1-Aug2023/Tear%20Stain%20Paste%20%2B%20Wrinkle%20Wipes%20Only.png';
          altText = 'Image of Tear Stain Paste + Wrinkle Wipes Only';
          break;
        case 'Wrinkle Paste + Wrinkle Wipes Only':
          imgSrc = 'https://storage.googleapis.com/images.trinity.one/Squishface/2023/SF-A-PDP-BundleOptimization-V1-Aug2023/Wrinkle%20Paste%20_%20Wrinkle%20Wipes%20Only.png';
          altText = 'Image of Wrinkle Paste + Wrinkle Wipes Only';
          break;
        case 'Wrinkle Paste + Wrinkle Wipes + Applicator':
          imgSrc = 'https://storage.googleapis.com/images.trinity.one/Squishface/2023/SF-A-PDP-BundleOptimization-V1-Aug2023/Wrinkle%20Paste%20%2B%20Wrinkle%20Wipes%20%2B%20Applicator.png';
          altText = 'Image of Wrinkle Paste + Wrinkle Wipes + Applicator';
          break;
        case 'Squishface Gift Box with Wrinkle Paste':
          imgSrc = 'https://squishface.com/cdn/shop/files/ClosedGiftSetwWP-2400px_2763d22b-898d-4d5f-8fd2-41e3ea9717d3.jpg?v=1689000354&width=1080';
          altText = 'Image of Squishface Gift Box with Wrinkle Paste';
          break;
        case 'Squishface Gift Box with Tear Stain Paste':
          imgSrc = 'https://squishface.com/cdn/shop/files/ClosedGiftSetwTSP-2400px_939b3f38-87be-4172-a63d-51606f476adf.jpg?v=1689000354&width=1080';
          altText = 'Image of Squishface Gift Box with Tear Stain Paste';
          break;
      }

      // Create the image element if it doesn't exist
      const existingImgElement = option.querySelector('.variant__thumbnail');

      if (!existingImgElement) {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = altText;
        // Add the class variant__thumbnail to the image
        imgElement.classList.add('variant__thumbnail');
        // Insert the image element between the input and label
        const inputElement = option.querySelector('input');
        inputElement.insertAdjacentElement('afterend', imgElement);
      }

      // Add click event listener for the .variant-input
      option.addEventListener('click', () => {
        // Simulate a click on the radio input
        option.querySelector('input[type="radio"]').click();
        // Update the classes
        updateClass();
      });
    });

    setInitialClass();

  } else {
    // console.warn('No .variant-input elements found.');
  }

  cartTestTracking();
};
try {
  // ensures code runs when content is loaded
  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    onDocumentLoad();
  } else {
    document.addEventListener("DOMContentLoaded", onDocumentLoad);
  }
} catch (err) {
  var e = {
    dev: 'U05C4LLSK6G',
    vwotest: '2',
    vwodesc: 'SF-A-PDP-BundleOptimization-August2023 | Variation',
    type: 'vwo',
    message: err.toString(),
    stack: err.stack,
    source: window.location.href
  };
  var x = new XMLHttpRequest;
  x.open("POST", "https://us-central1-tixray.cloudfunctions.net/err", !0), x.send(JSON.stringify(e));
}
