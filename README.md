# Ecommerce-website-using-API-in-React
By fetching the data from API the e-commerce website is built. <br>
<br>
This is a product listing app that displays products and allows users to filter them by category. It fetches data from a public API called DummyJSON, which provides fake e-commerce data (like product info, images, and categories).


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>

  <h2 class="emoji">🧠 How the App Works (Step by Step)</h2>

  <h3>1. When the Page Loads (Initial Setup):</h3>
  <p>The app automatically fetches:</p>
  <ul>
    <li>A list of all product categories (like smartphones, skincare, laptops, etc.).</li>
    <li>A list of all available products.</li>
  </ul>
  <p>These are stored in memory using React’s state management (<code>useState</code>), ready to be displayed.</p>

  <h3>2. What the User Sees Initially:</h3>
  <ul>
    <li>A big heading: <strong>"Our Products"</strong>.</li>
    <li>A layout split into two sections:
      <ul>
        <li><strong>Left Panel (Sidebar):</strong> Shows a list of categories.</li>
        <li><strong>Right Panel (Main Area):</strong> Shows the products in a grid format (3 columns).</li>
      </ul>
    </li>
  </ul>
  <p>Each product shows:</p>
  <ul>
    <li>A thumbnail image.</li>
    <li>The product’s title.</li>
    <li>Its price (shown as “RS” followed by the price number).</li>
  </ul>

  <h3>3. User Interaction (Clicking a Category):</h3>
  <ul>
    <li>When a user clicks on a category from the left sidebar:</li>
    <ul>
      <li>The app fetches only the products in that category from the API.</li>
      <li>The product grid on the right updates to show just those products.</li>
    </ul>
    <li>This lets the user filter products easily based on what they want to see.</li>
  </ul>

  <h2 class="emoji">📡 How the API Works</h2>

  <p>The app uses <strong>DummyJSON API</strong> — a free fake data service — through <strong>axios</strong>, which is a JavaScript tool for fetching data from APIs.</p>

  <h3>a. Fetching All Categories</h3>
  <ul>
    <li>When the app loads, it asks the API: “Give me a list of all product categories.”</li>
    <li>The API replies with names like <code>"laptops"</code>, <code>"smartphones"</code>, <code>"fragrances"</code>, etc.</li>
  </ul>

  <h3>b. Fetching All Products</h3>
  <ul>
    <li>It then asks: “Give me all the products you have.”</li>
    <li>The API replies with a big list of products, each containing details like:
      <ul>
        <li>Title</li>
        <li>Price</li>
        <li>Thumbnail image</li>
        <li>Description</li>
        <li>Category</li>
      </ul>
    </li>
  </ul>

  <h3>c. Filtering by Category</h3>
  <ul>
    <li>When the user selects a specific category, the app asks:<br>
      <em>“Give me only the products in the ‘smartphones’ category,”</em> for example.
    </li>
    <li>The API replies with only those products, which are then shown to the user.</li>
  </ul>

  <h2 class="emoji">🖼️ What the User Sees on Screen</h2>

  <h3>Structure of the Page:</h3>

  <div class="layout-diagram">
[ Category List ]      [ Product Grid ]<br>
[ smartphones     ]    [ iPhone 9       ]<br>
[ laptops         ]    [ MacBook Pro    ]<br>
[ fragrances      ]    [ Perfume A      ]<br>
                      [ Product B       ]<br>
                      [ ...            ]
  </div>

  <p>The category list appears on the left.</p>
  <p>The products appear on the right in a grid.</p>

  <p>Each product card is styled with:</p>
  <ul>
    <li>A shadow effect</li>
    <li>An image at the top</li>
    <li>The product title</li>
    <li>The price</li>
  </ul>

  <h2 class="emoji">✅ Summary</h2>
  <ul>
    <li><strong>Main Purpose:</strong> Show a product catalog with category-based filtering.</li>
    <li><strong>API Role:</strong> Supplies product data and category names.</li>
    <li><strong>User Actions:</strong> Click categories to filter products.</li>
    <li><strong>Visual Result:</strong> Clean two-column layout with product cards updating based on selected category.</li>
  </ul>

</body>
</html>
