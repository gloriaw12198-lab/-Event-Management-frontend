import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/Input/Input";
import { useToast } from "../../context/ToastContext";

const ManageCategories = () => {
  const { addToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categories, setCategories] = useState([
    { id: 1, name: "Technology", events: 45 },
    { id: 2, name: "Music", events: 32 },
    { id: 3, name: "Art", events: 28 },
    { id: 4, name: "Business", events: 19 },
    { id: 5, name: "Sports", events: 15 },
    { id: 6, name: "Food", events: 12 },
  ]);
  const [form, setForm] = useState({ name: "" });

  const handleAdd = () => {
    setEditingCategory(null);
    setForm({ name: "" });
    setModalOpen(true);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setForm({ name: category.name });
    setModalOpen(true);
  };

  const handleDelete = (categoryId) => {
    setCategories(categories.filter((c) => c.id !== categoryId));
    addToast("Category deleted successfully", "success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(categories.map((c) => 
        c.id === editingCategory.id ? { ...c, name: form.name } : c
      ));
      addToast("Category updated successfully", "success");
    } else {
      const newCategory = {
        id: Date.now(),
        name: form.name,
        events: 0,
      };
      setCategories([...categories, newCategory]);
      addToast("Category added successfully", "success");
    }
    setModalOpen(false);
    setForm({ name: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar role="admin" />
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Categories</h1>
            <p className="text-gray-600">Create and manage event categories</p>
          </div>
          <Button onClick={handleAdd}>+ Add Category</Button>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Category</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Events</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{category.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{category.events}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(category)}
                        className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={editingCategory ? "Edit Category" : "Add Category"}
          size="sm"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Category Name"
              name="name"
              placeholder="Enter category name"
              value={form.name}
              onChange={(e) => setForm({ name: e.target.value })}
              required
            />
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setModalOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                {editingCategory ? "Update" : "Add"}
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </div>
  );
};

export default ManageCategories;