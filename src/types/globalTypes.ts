export interface Global {
	object: string;
	id: string;
	parent: Parent;
	created_time: string;
	last_edited_time: string;
	created_by: CreatedByOrLastEditedBy;
	last_edited_by: CreatedByOrLastEditedBy;
	has_children: boolean;
	archived: boolean;
	type: string;
}
export interface Parent {
	type: string;
	page_id: string;
}
export interface CreatedByOrLastEditedBy {
	object: string;
	id: string;
}

export interface RichTextEntity {
	type: string;
	text: Text;
	annotations: Annotations;
	plain_text: string;
	href?: null;
}
export interface Text {
	content: string;
	link?: Link | null;
}

export interface Link {
	url?: string;
}

export interface Annotations {
	bold: boolean;
	italic: boolean;
	strikethrough: boolean;
	underline: boolean;
	code: boolean;
	color: string;
}

export interface Heading2Block {
	rich_text?: RichTextEntity[] | null;
	color: string;
	is_toggleable: boolean;
}

export interface Paragraph extends Global {
	rich_text?: RichTextEntity[] | null;
	color: string;
	children: any;
	// I will worry about typing children later
}
export interface Quote extends Global {
	rich_text?: RichTextEntity[] | null;
	color: string;
	children: any;
	// I will worry about typing children later
}
export interface BulletedList extends Global {
	rich_text?: RichTextEntity[] | null;
	color: string;
	children: any;
	// I will worry about typing children later
}

export interface Toggle extends Global {
	rich_text?: RichTextEntity[] | null;
	color: string;
	children?: any;
	// I will worry about typing children later
}

export interface Code extends Global {
	rich_text?: RichTextEntity[] | null;
	caption?: RichTextEntity[] | null;
	language?:
		| "abap"
		| "arduino"
		| "bash"
		| "basic"
		| "c"
		| "clojure"
		| "coffeescript"
		| "c++"
		| "c#"
		| "css"
		| "dart"
		| "diff"
		| "docker"
		| "elixir"
		| "elm"
		| "erlang"
		| "flow"
		| "fortran"
		| "f#"
		| "gherkin"
		| "glsl"
		| "go"
		| "graphql"
		| "groovy"
		| "haskell"
		| "html"
		| "java"
		| "javascript"
		| "json"
		| "julia"
		| "kotlin"
		| "latex"
		| "less"
		| "lisp"
		| "livescript"
		| "lua"
		| "makefile"
		| "markdown"
		| "markup"
		| "matlab"
		| "mermaid"
		| "nix"
		| "objective-c"
		| "ocaml"
		| "pascal"
		| "perl"
		| "php"
		| "plain text"
		| "powershell"
		| "prolog"
		| "protobuf"
		| "python"
		| "r"
		| "reason"
		| "ruby"
		| "rust"
		| "sass"
		| "scala"
		| "scheme"
		| "scss"
		| "shell"
		| "sql"
		| "swift"
		| "typescript"
		| "vb.net"
		| "verilog"
		| "vhdl"
		| "visual basic"
		| "webassembly"
		| "xml"
		| "yaml"
		| "java|c|c++|c#";
	// I will worry about typing children later
}
