---
title: はじめまして 兼 テスト記事
date: 2025-08-24
updated: 2025-09-15
tags: [diary, test]
layout: "../../layouts/PostsLayout.astro"
initialTab: about
---

## はじめまして 兼 テスト記事

**巡回シフト行列** $P$ を

$$
P
=
\begin{bmatrix}
  & 1 &        &   \\
  &   & \ddots &   \\
  &   &        & 1 \\
1 &   &        &   \\
\end{bmatrix}
\in \mathbb{R}^{n \times n}
$$

で定める. $\omega = \mathrm{e}^{\frac{2\pi\mathrm{i}}{n}}$ としたとき, $P^0, P^1, \cdots, P^{n - 1}$ は $U = (u_{ij}) \in \mathbb{C}^{n \times n}$ を $u_{ij} = \omega^{ij}$ と定めて

$$
UP^k U^*
= \mathrm{diag}(\omega^k, \cdots, \omega^{(n - 1)k})
$$

と対角化可能である. すなわち, $C \in \mathbb{C}^{n \times n}$ が

$$
C
=
\begin{bmatrix}
c_0       & c_1    & \cdots & c_{n - 1} \\
c_{n - 1} & c_0    & \cdots & c_{n - 2} \\

\vdots    & \vdots & \ddots & \vdots    \\
c_1       & c_2    & \cdots & c_0
\end{bmatrix}
$$

で与えられる(このような場合に $C$ は**巡回行列**であるという)とき, 固有値は $\sum_{i = 0}^{n - 1} \omega^{ik} c_i$, 固有ベクトルは $(\omega^k, \cdots, \omega^{(n - 1)k})^\top$ となる $(k = 0, \cdots, n - 1)$.
また $F = \frac{1}{\sqrt{n}} U$ とおくとこれは離散 Fourier 変換を表す行列となり, 次が成り立つ(畳み込みの公式) :

$$
F(u * v) = (Fu) \circ (Fv)
\quad (\forall u, v \in \mathbb{C}^{n \times n})
$$

ただし, $*$ は畳み込み, $\circ$ は要素ごとの積を表す.
