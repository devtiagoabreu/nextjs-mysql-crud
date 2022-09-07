export function ProductForm() {
  return (
    <div>
        <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id="name" />

            <label htmlFor='price'>Price:</label>
            <input type='text' name='price' id="price" />

            <label htmlFor='decription'>Description:</label>
            <textarea name='description' rows='2'></textarea>

            <button>Save Product</button>
        </form>
    </div>
  )
}
