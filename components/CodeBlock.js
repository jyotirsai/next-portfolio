import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ children, lang }) => {
  const codeString = `
    import React from 'react'
    import { Grid, Paper, Textfield, Typography, Button } from "@material-ui/core"
    
    const AddItem = () => {
        return (
            <div>
                <h1></h1>
            </div>
        )
    }
    
    export default AddItem
    `;
  return (
    <SyntaxHighlighter language={lang} style={vscDarkPlus}>
      {children.trim()}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
