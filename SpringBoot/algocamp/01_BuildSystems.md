### Why do we need build systems ?
1. We need build systems to - 
  - Compile big projects together.
  - The compilation should include the files created by us and the third party libraries we are dependent on(managing dependencies).
  - After the compilation is done they ultimately give us the final running execuatable.
  - So, The tools which can do both of these things mentioned above are called Build Tools.
  - Eg- maven(java), gradle(java), bazel(java), npm(nodejs), pip(python), crate(rust) etc...

## Bazel Build tool - 
1. Bazel is an open sourced, multi language build tool which is created by Google.
2. Personally used by Google for most of their projects.
3. Bazel is very fast and correct as it heavily depends on caching.
4. Its not like only Google uses this. Its also used by good set of companies 
    like- Uber, adobe, asana, canva, databricks, angular,  etc,.
5. Similarly, Meta uses Buck.

# How to build using bazel - 
1. Create a file called "WORKSPACE.bazel" and "MODULE.bazel" file in the root directory of our project.
2. Then create "BUILD.bazel" file in all the child folder and write the java_binary() or java_library() configuration based on the folder.
3. After that, use this command to build the project - 
    bazel build //app:[name defined in the build file.]
    bazel = asking bazel to do the task
    build = build/compile the project
    // = representing the root
    app = app is one of the projects(folder)
    :main = main is one of the library/binary name.


