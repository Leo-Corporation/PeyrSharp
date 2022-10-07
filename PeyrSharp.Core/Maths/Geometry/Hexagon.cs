﻿/*
MIT License

Copyright (c) Léo Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
*/

using System;

namespace PeyrSharp.Core.Maths.Geometry
{
	/// <summary>
	/// A class that represents a Hexagon.
	/// </summary>
	public class Hexagon
	{
		/// <summary>
		/// The length of the side of the <see cref="Hexagon"/>.
		/// </summary>
		public double Side { get; init; }

		/// <summary>
		/// The perimeter of the <see cref="Hexagon"/>.
		/// </summary>
		public double Perimeter => 6 * Side;

		/// <summary>
		/// The area of the <see cref="Hexagon"/>.
		/// </summary>
		public double Area => 3 * (Math.Sqrt(3) / 2) * Side * Side;

		/// <summary>
		/// Initializes a <see cref="Hexagon"/> from the length of its side.
		/// </summary>
		/// <param name="side">The length of one side of the <see cref="Hexagon"/>.</param>
		/// <exception cref="DivideByZeroException"></exception>
		public Hexagon(double side)
		{
			if (side <= 0) throw new DivideByZeroException("Please provide a value higher than 0.");
			Side = side;
		}
	}
}
