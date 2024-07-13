// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "VikirMobileNumber",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "VikirMobileNumber",
            targets: ["VikirMobileNumberPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "VikirMobileNumberPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/VikirMobileNumberPlugin"),
        .testTarget(
            name: "VikirMobileNumberPluginTests",
            dependencies: ["VikirMobileNumberPlugin"],
            path: "ios/Tests/VikirMobileNumberPluginTests")
    ]
)