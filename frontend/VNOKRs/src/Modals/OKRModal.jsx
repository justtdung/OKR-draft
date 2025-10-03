import React from "react";
import { X, Plus, HelpCircle, Globe, Lock } from "lucide-react";

const OKRModal = ({ show, onClose, newOKR, setNewOKR, onSubmit }) => {
  if (!show) return null;

  const addKeyResult = () => {
    setNewOKR({
      ...newOKR,
      keyResults: [
        ...newOKR.keyResults,
        {
          description: "",
          target: "",
          unit: "Người",
          planLink: "",
          resultLink: "",
          relatedOKRs: "",
        },
      ],
    });
  };

  const removeKeyResult = (index) => {
    setNewOKR({
      ...newOKR,
      keyResults: newOKR.keyResults.filter((_, i) => i !== index),
    });
  };

  const updateKeyResult = (index, field, value) => {
    const updated = [...newOKR.keyResults];
    updated[index][field] = value;
    setNewOKR({ ...newOKR, keyResults: updated });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-xl w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-800">Cập nhật OKRs</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          {/* Chu kỳ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Chu kỳ
            </label>
            <select
              value={newOKR.cycle || ""}
              onChange={(e) => setNewOKR({ ...newOKR, cycle: e.target.value })}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="">Chọn chu kỳ</option>
              <option value="Q1-2025">Q1-2025</option>
              <option value="Q2-2025">Q2-2025</option>
              <option value="Q3-2025">Q3-2025</option>
            </select>
          </div>

          {/* OKR cấp trên */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              OKRs cấp trên
            </label>
            <select
              value={newOKR.parentOKR || ""}
              onChange={(e) =>
                setNewOKR({ ...newOKR, parentOKR: e.target.value })
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option value="">Chọn OKR cấp trên</option>
              <option value="okr1">OKR 1</option>
              <option value="okr2">OKR 2</option>
            </select>
          </div>

          {/* Mục tiêu */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mục tiêu của bạn *
            </label>
            <input
              type="text"
              value={newOKR.title || ""}
              onChange={(e) =>
                setNewOKR({ ...newOKR, title: e.target.value })
              }
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder="Nhập mục tiêu của bạn"
            />
          </div>

          {/* Kết quả chính */}
          <div>
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              Kết quả chính <HelpCircle className="w-4 h-4 text-blue-500" />
            </label>
            <div className="space-y-4 mt-2">
              {newOKR.keyResults?.map((kr, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg space-y-3 bg-gray-50"
                >
                  {/* Mô tả + Mục tiêu */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <input
                        type="text"
                        value={kr.description}
                        onChange={(e) =>
                          updateKeyResult(index, "description", e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        placeholder="Mô tả kết quả chính"
                      />
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={kr.target}
                        onChange={(e) =>
                          updateKeyResult(index, "target", e.target.value)
                        }
                        className="w-20 rounded-lg border border-gray-300 px-3 py-2"
                        placeholder="Mục tiêu"
                      />
                      <select
                        value={kr.unit}
                        onChange={(e) =>
                          updateKeyResult(index, "unit", e.target.value)
                        }
                        className="rounded-lg border border-gray-300 px-3 py-2"
                      >
                        {["Người", "Phần trăm", "Số lượng", "Doanh thu", "Khác"].map(
                          (u, idx) => (
                            <option key={idx} value={u}>
                              {u}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Link kế hoạch + Link kết quả */}
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={kr.planLink}
                      onChange={(e) =>
                        updateKeyResult(index, "planLink", e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Link kế hoạch"
                    />
                    <input
                      type="text"
                      value={kr.resultLink}
                      onChange={(e) =>
                        updateKeyResult(index, "resultLink", e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Link kết quả"
                    />
                  </div>

                  {/* Kết quả chính liên quan */}
                  <div>
                    <input
                      type="text"
                      value={kr.relatedOKRs}
                      onChange={(e) =>
                        updateKeyResult(index, "relatedOKRs", e.target.value)
                      }
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                      placeholder="Kết quả chính liên quan (Cấp trên)"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeKeyResult(index)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addKeyResult}
              className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Plus className="w-5 h-5 mr-1" /> Thêm Kết quả chính
            </button>
          </div>

          {/* Hiển thị */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hiển thị
            </label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="public"
                  checked={newOKR.visibility === "public"}
                  onChange={(e) =>
                    setNewOKR({ ...newOKR, visibility: e.target.value })
                  }
                />
                <Globe className="w-4 h-4 text-blue-500" /> Công khai
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="private"
                  checked={newOKR.visibility === "private"}
                  onChange={(e) =>
                    setNewOKR({ ...newOKR, visibility: e.target.value })
                  }
                />
                <Lock className="w-4 h-4 text-gray-500" /> Riêng tư
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex gap-3 justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            QUAY LẠI
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            CẬP NHẬT
          </button>
        </div>
      </div>
    </div>
  );
};

export default OKRModal;
