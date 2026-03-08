
"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
    LuBold, LuItalic, LuList, LuLink,
    LuUndo2, LuRedo2, LuChevronDown
} from "react-icons/lu";

const TermsEdit = () => {
    // 1. Editor Configuration
    const editor = useEditor({
        extensions: [StarterKit],
        // content: "<p>Enter privacy policy details...</p>",
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: "prose prose-sm focus:outline-none w-full max-w-none min-h-[300px] p-4 text-gray-700 font-montserrat",
            },
        },
    });

    if (!editor) return null;

    return (
        <div className="flex font-montserrat items-start justify-center w-full">
            <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-20">

                {/* Header */}
                <h2 className="text-xl font-semibold text-[#111827] mb-8">
                    Terms & Condition
                </h2>

                <div className="space-y-4">

                    {/* CUSTOM EDITOR TOOLBAR (Image jaisa) */}
                    <div className="flex flex-wrap items-center gap-2 p-2 bg-[#F8FAFC] border border-gray-200 rounded-xl">

                        {/* Paragraph Dropdown */}
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 cursor-pointer hover:bg-gray-50">
                            <span>Paragraph</span>
                            <LuChevronDown size={14} className="text-gray-400" />
                        </div>

                        <div className="h-6 w-[1px] bg-gray-200 mx-1" />

                        {/* Toolbar Buttons */}
                        <div className="flex items-center gap-1">
                            <ToolbarButton
                                onClick={() => editor.chain().focus().toggleBold().run()}
                                active={editor.isActive("bold")}
                                icon={<LuBold size={18} />}
                            />
                            <ToolbarButton
                                onClick={() => editor.chain().focus().toggleItalic().run()}
                                active={editor.isActive("italic")}
                                icon={<LuItalic size={18} />}
                            />
                            <ToolbarButton
                                icon={<LuLink size={18} />}
                            />
                            <ToolbarButton
                                onClick={() => editor.chain().focus().toggleBulletList().run()}
                                active={editor.isActive("bulletList")}
                                icon={<LuList size={18} />}
                            />
                        </div>

                        <div className="h-6 w-[1px] bg-gray-200 mx-1" />

                        {/* Undo / Redo */}
                        <div className="flex items-center gap-1">
                            <ToolbarButton
                                onClick={() => editor.chain().focus().undo().run()}
                                icon={<LuUndo2 size={18} />}
                            />
                            <ToolbarButton
                                onClick={() => editor.chain().focus().redo().run()}
                                icon={<LuRedo2 size={18} />}
                            />
                        </div>
                    </div>

                    {/* EDITOR CONTENT AREA */}
                    <div className="w-full border border-gray-200 rounded-2xl bg-white overflow-hidden focus-within:border-orange-400 transition-all">
                        <EditorContent editor={editor} />
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-col md:flex-row gap-4 pt-6">
                        <button className="w-full md:flex-1 h-14 rounded-2xl border-2 border-[#FF7A22] text-[#FF7A22] font-bold text-sm tracking-wider hover:bg-orange-50 transition uppercase shrink-0">
                            Cancel
                        </button>

                        <button className="w-full md:flex-1 h-14 rounded-2xl bg-[#FF7A22] text-white font-bold text-sm tracking-wider hover:bg-[#e66a1a] transition shadow-lg shadow-orange-200 uppercase shrink-0">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Toolbar Button Component for reuse
const ToolbarButton = ({ icon, onClick, active }) => (
    <button
        type="button"
        onClick={onClick}
        className={`p-2 rounded-lg transition-colors cursor-pointer ${active
            ? "bg-orange-100 text-[#FF7A22]"
            : "text-gray-400 hover:bg-white hover:text-gray-600 hover:shadow-sm"
            }`}
    >
        {icon}
    </button>
);

export default TermsEdit;