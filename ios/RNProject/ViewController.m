//
//  ViewController.m
//  RNProject
//
//  Created by 许伟杰 on 2019/5/20.
//  Copyright © 2019 JackXu. All rights reserved.
//

#import "ViewController.h"
#import "HYReactNativeBaseViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 200, 50)];
    button.center = self.view.center;
    [button setTitle:@"跳转RN" forState:0];
    [button setTitleColor:[UIColor greenColor] forState:0];
    [button addTarget:self action:@selector(clickButton:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (void)clickButton:(UIButton*)button{
//    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
//
//    RCTRootView *rootView =
//    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
//                                moduleName: @"Navigator"
//                         initialProperties: nil
//                             launchOptions: nil];
//    UIViewController *vc = [[UIViewController alloc] init];
//    vc.view = rootView;
    HYReactNativeBaseViewController *vc = [[HYReactNativeBaseViewController alloc] initWithPageName:@"Navigator" initialProperty:@{}];
    [self.navigationController pushViewController:vc animated:YES];
}



@end
