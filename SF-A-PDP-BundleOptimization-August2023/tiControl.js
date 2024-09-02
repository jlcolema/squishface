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
    vwodesc: 'SF-A-PDP-BundleOptimization-August2023 | TI Control',
    type: 'vwo',
    message: err.toString(),
    stack: err.stack,
    source: window.location.href
  };
  var x = new XMLHttpRequest;
  x.open("POST", "https://us-central1-tixray.cloudfunctions.net/err", !0), x.send(JSON.stringify(e));
}
