import os

src_dir = os.path.join(os.getcwd(), "src")
output_file = "combine.md"

with open(output_file, "w", encoding="utf-8") as out_f:
	out_f.write("Code:\n")
	for filename in sorted(os.listdir(src_dir)):
		if filename.endswith((".js", ".jsx", ".css")):
			file_path = os.path.join(src_dir, filename)
			with open(file_path, "r", encoding="utf-8") as in_f:
				out_f.write(f"file: {filename}\n")
				out_f.write(in_f.read())
				out_f.write("\n")
	out_f.write("---\n")
