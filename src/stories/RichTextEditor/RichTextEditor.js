import React, { Component } from "react";
import PropTypes from "prop-types";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const RichTextEditor = ({ content, onChange, data, ...props }) => {
  return (
    <div>
      <CKEditor editor={ClassicEditor} data={data}
       style={{height: '50px'}}
      />
    </div>
  );
};

RichTextEditor.propTypes = {
  /**
   * Editor type
   */
  editor: PropTypes.oneOf(["ClassicEditor", "InilineEditor"]),
  /**
   * Data of string type
   */
  data: PropTypes.string,
};

RichTextEditor.defaultProps = {
  editor: "ClassicEditor",
  data: "",
};
