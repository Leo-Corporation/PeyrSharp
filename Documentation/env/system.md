# Sys
This page is about the `Sys` class available in [`PeyrSharp.Env`](/env.md).
You can find here all of its methods and properties.

::: info
This class is `static`.
:::

## Compatibility

The `Sys` class is part of the `PeyrSharp.Env` module, and is compatible with all of these frameworks and platforms:

| Package/Platform 	| Windows 	| macOS 	| Linux + others 	|
|------------------	|---------	|-------	|----------------	|
| Env            	| ✅       	| ⚠️     	| ⚠️              	|
| **Framework**         | **.NET 5** | **.NET 6**  | **.NET 7** |
| Env            	| ✅       	| ✅     	| ✅              	|

::: warning
Some methods, classes or features of `PeyrSharp.Env` might not be available in all platforms.
:::

## Methods
### ExecuteAsAdmin(process)
#### Definition

Executes a program in administrator mode.

::: warning
This method only works on Windows.
:::

#### Arguments

| Type      	| Name      	| Meaning                         	|
|-----------	|-----------	|---------------------------------	|
| `Process` 	| `process` 	| The process to launch as admin. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

// Define a process
Process p = new();
p.StartInfo.FileName = "notepad.exe";

Sys.ExecuteAsAdmin(p);
~~~

### ExecuteAsAdmin(fileName)
#### Definition

Executes a program in administrator mode.

::: warning
This method only works on Windows.
:::

#### Arguments

| Type      	| Name      	| Meaning                         	|
|-----------	|-----------	|---------------------------------	|
| `string`   	| `fileName` 	| The path to the program to launch in admin mode. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

Sys.ExecuteAsAdmin("notepad.exe");
~~~

### LaunchUWPApp(packageFamilyName, applicationID)
#### Definition
This method allows you to launch an UWP app from its `PackageFamilyName` and its `Application Id`. You can find this information by running in Windows Powershell (admin) the following command:

~~~ powershell
Get-AppxPackage | Select PackageFamilyName, InstallLocation
~~~

You can find the Application Id in the AppxManifest.xml file in

~~~ txt
InstallLocation\AppxManifest.xml
~~~

::: warning
This method only works on Windows.
:::

#### Arguments

| Type     	| Name                	| Meaning                                                           	|
|----------	|---------------------	|-------------------------------------------------------------------	|
| `string` 	| `packageFamilyName` 	| The `PackageFamilyName` property.                                 	|
| `string` 	| `applicationID`     	| The `Application Id` property in the UWP `AppxManifest.xml` file. 	|

#### Usage

~~~ c#
using PeyrSharp.Env;

Sys.LaunchUWPApp("Microsoft.MinecraftUWP_8wekyb3d8bbwe", "App"); // Launch Minecraft UWP
~~~

## Properties
### CurrentOperatingSystem
#### Definition

~~~ c#
public static OperatingSystems CurrentOperatingSystem { get; }
~~~

Gets the current Operating system. Returns a [`OperatingSystems`](/enumerations.md#operatingsystems) value. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

if (Sys.CurrentOperatingSystem == OperatingSystems.Windows)
{
    Console.WriteLine("You are on Windows");
}
~~~

### CurrentWindowsVersion
#### Definition

~~~ c#
public static WindowsVersion CurrentWindowsVersion { get; }
~~~

Gets the current Windows version. Returns a [`WindowsVersion`](/enumerations.md#windowsversion) value. You can only `get` this property.

::: warning
This property only works on Windows.
:::

::: danger
This property only works if you specify in the Application Manifest, in the compatibility section, that Windows 8, 8.1 and 10/11 are compatible with the software. Otherwise, it will return `Windows8`.
:::

~~~ xml
<compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1">
    <application>
      <!-- Windows Vista -->
      <!--<supportedOS Id="{e2011457-1546-43c5-a5fe-008deee3d3f0}" />-->

      <!-- Windows 7 -->
      <supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}" />

      <!-- Windows 8 -->
      <supportedOS Id="{4a2f28e3-53b9-4441-ba9c-d69d4a4a6e38}" />

      <!-- Windows 8.1 -->
      <supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}" />

      <!-- Windows 10 -->
      <supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}" />
    </application>
</compatibility>
~~~

#### Usage

~~~ c#
using PeyrSharp.Env;

if (Sys.CurrentWindowsVersion == WindowsVersion.Windows11)
{
    Console.WriteLine("You are on Windows 11");
}
~~~

### IsDarkThemeSupported
#### Definition

~~~ c#
public static bool IsDarkThemeSupported { get; }
~~~

Gets if the current Windows version supports dark theme. Returns a `bool` value. You can only `get` this property.

::: warning
This property only works on Windows.
:::

#### Usage

~~~ c#
using PeyrSharp.Env;

if (Sys.IsDarkThemeSupported)
{
    Console.WriteLine("You are running Windows 10 or higher.");
}
~~~

### RunningProcesses 
#### Definition

~~~ c#
public static Process[] RunningProcesses { get; }
~~~

Gets the processes that are currently running. Returns a `Process[]` array. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

Process[] procs = Sys.RunningProcesses;

for (int i = 0; i < procs.Length; i++)
{
    Console.WriteLine(procs[i].ProcessName); // Print the name of all running processes
}
~~~

### RunningProcessesNames
#### Definition

~~~ c#
public static string[] RunningProcessesNames { get; }
~~~

Gets the names of the processes that are currently running. Returns a `string[]` array. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

string[] procs = Sys.RunningProcessesNames;

for (int i = 0; i < procs.Length; i++)
{
    Console.WriteLine(procs[i]); // Print the name of all running processes
}
~~~

### UnixTime
#### Definition

~~~ c#
public static int Unix { get; }
~~~

Gets the current UnixTime. Returns an `int`. You can only `get` this property.

#### Usage

~~~ c#
using PeyrSharp.Env;

int unixTime = Sys.UnixTime;
~~~