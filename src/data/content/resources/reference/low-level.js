/**
 * MIT License
 *
 * Copyright (c) 2025 Qiu Yixiang
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const LowLevelReference = [
    {
        name: "Programming Language",
        id: "programming-language",
        subContent: [
            {
                name: "C Language",
                id: "c-programming-language",
                url: "https://en.cppreference.com/w/c.html",
                content: "C Standard Library Reference",
            },
            {
                name: "C++ Language",
                id: "c++-programming-language",
                url: "https://en.cppreference.com/w/cpp.html",
                content: "C++ Standard Library Reference",
            },
            {
                name: "Rust Language",
                id: "rust-programming-language",
                url: "https://doc.rust-lang.org/std/index.html",
                content: "Rust Standard Library",
            },
        ],
    },
    {
        name: "Tools",
        id: "tools",
        subContent: [
            {
                name: "GCC",
                id: "gcc",
                url: "https://gcc.gnu.org/onlinedocs/gcc-13.1.0/gcc/",
                content: "GCC Documentation",
            },
            {
                name: "GDB",
                id: "gdb",
                url: "https://sourceware.org/gdb/documentation/",
                content: "GDB Documentation",
            },
            {
                name: "LLDB",
                id: "lldb",
                url: "https://lldb.llvm.org/use/tutorial.html",
                content: "LLDB Tutorial",
            },
            {
                name: "binutils",
                id: "binutils",
                url: "https://sourceware.org/binutils/docs/binutils/index.html",
                content: "binutils Documentation",
            },
            {
                name: "git",
                id: "git",
                url: "https://git-scm.com/docs",
                content: "git Documentation",
            },
            {
                name: "make",
                id: "make",
                url: "https://www.gnu.org/software/make/manual/make.html",
                content: "make Documentation",
            },
            {
                name: "qemu",
                id: "qemu",
                url: "https://www.qemu.org/docs/master/",
                content: "qemu Documentation",
            },
            {
                name: "bochs",
                id: "bochs",
                url: "https://bochs.sourceforge.io/doc/docbook/user/index.html",
                content: "bochs Documentation",
            },
        ],
    },
    {
        name: "Unix System API",
        id: "unix-system-api",
        subContent: [
            {
                name: "x86 system call",
                id: "x86-system-call",
                url: "https://x86.syscall.sh/",
                content: "x86 System Call Table",
            },
            {
                name: "x64 system call",
                id: "x64-system-call",
                url: "https://x64.syscall.sh/",
                content: "x64 System Call Table",
            },
            {
                name: "ARM system call",
                id: "arm-system-call",
                url: "https://arm64.syscall.sh/",
                content: "ARM System Call Table",
            },
        ],
    },
];

export default LowLevelReference;
